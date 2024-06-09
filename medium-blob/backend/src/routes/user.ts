import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { siginupInput, sigininInput } from "@shivamdhamija/medium-common";
export const userRoute = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
}>();
userRoute.post("/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = siginupInput.safeParse(body);
    if (!success) {
      c.status(400);
      console.log(body);
      return c.json({ message: "input is not of valid type" });
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "error came while signing up" });
  }
});
userRoute.post("/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = sigininInput.safeParse(body);
    if (!success) {
      c.status(400);
      console.log(body);
      return c.json({ message: "input is not of valid type" });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    c.status(400);
    console.log(e);
    return c.json({ message: "erro came while loging in" });
  }
});
