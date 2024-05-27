import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@shivamdhamija/medium-common";
export const blogRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
  Variables: { userId: string };
}>();
blogRouter.use("/*", async (c, next) => {
  try {
    const user = await verify(
      c.req.header("authorization") || "",
      c.env.JWT_SECRET
    );
    if (user) {
      //@ts-ignore
      c.set("userId", user.id);
      await next();
    } else {
      c.status(400);
      return c.json({ error: "unauthorized" });
    }
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "erro came authorizing" });
  }
});
blogRouter.post("/", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      console.log(body);
      return c.json({ message: "input is not of valid type" });
    }
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        auhorId: c.get("userId"),
      },
    });
    return c.json({ id: post.id });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "error came posting blog" });
  }
});
blogRouter.put("/:id", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      console.log(body);
      return c.json({ message: "input is not of valid type" });
    }
    const id = c.req.param("id");
    const post = await prisma.post.update({
      data: {
        title: body.title,
        content: body.content,
      },
      where: { id: id },
    });
    return c.json({ id: post.id });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "error came while updating blog" });
  }
});
blogRouter.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.post.findMany();
    return c.json({ blogs: posts });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "error came while fetching all blogs" });
  }
});
blogRouter.get("/:id", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    const post = await prisma.post.findFirst({
      where: { id: id },
    });
    return c.json({ blog: post });
  } catch (e) {
    c.status(400);
    return c.json({ message: "eror came while fetching data" });
  }
});
