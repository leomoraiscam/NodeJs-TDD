import { Router } from "express";
const routes = new Router();

import User from "./app/models/User";

User.create({
  name: "leonardo",
  email: "email@email.com.br",
  password_hash: "oiuytrtyuionjbhv",
});

export default routes;
