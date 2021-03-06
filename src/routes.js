import { Router } from "express";
const routes = new Router();
import authMiddleware from "../src/app/middleware/auth";
import SessionController from "./app/controllers/SessionController";

routes.post("/sessions", SessionController.store);
routes.get("/dashboard", authMiddleware, (req, res) => {
  return res.status(200).send();
});

export default routes;
