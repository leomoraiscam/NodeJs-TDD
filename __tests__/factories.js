import "../src/database";
import User from "../src/app/models/User";
import { factory } from "factory-girl";
import faker from "faker";

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
