import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRoute } from "./routes/user";
import { blogRouter } from "./routes/blog";
const app = new Hono<{ Bindings: { DATABASE_URL: string } }>();

app.use("/*", cors());
app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRouter);

export default app;
