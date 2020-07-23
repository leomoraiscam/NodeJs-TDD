import { Router } from "express";
const routes = new Router();

routes.get("/", async (req, res) => {
  return res.json("home");
});

export default routes;
