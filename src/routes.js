import { Router } from "express";
const routes = new Router();

import SessionController from "./app/controllers/SessionController";

routes.post("/sessions", SessionController.store);

export default routes;
