import express, { Application } from "express";
import * as tRPCExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.use(
  "/trpc",
  tRPCExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(3000, () => {
  console.log(`🚀 Server running`);
});
