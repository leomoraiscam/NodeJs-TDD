import "../src/database";
import { factory } from "factory-girl";
import User from "../src/app/models/User";

factory.define("User", User, {
  name: "test",
  email: "email@email.com.br",
  password: "123456",
});

export default factory;
