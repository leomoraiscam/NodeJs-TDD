import User from "../../src/app/models/User";
import request from "supertest";
import app from "../../src/app";
import truncate from "../utils/truncate";

describe("Authorization", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "User test",
      email: "email@email.com.br",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate witch invalid credentials", async () => {
    const user = await User.create({
      name: "teste",
      email: "email@email.com.br",
      password: "1231 23",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticad", async () => {
    const user = await User.create({
      name: "teste",
      email: "email@email.com.br",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.body).toHaveProperty("token");
  });
});
