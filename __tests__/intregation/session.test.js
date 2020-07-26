import request from "supertest";
import app from "../../src/app";
import truncate from "../utils/truncate";
import factory from "../factories";
import { sign } from "jsonwebtoken";

describe("Authorization", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.status).toBe(200);
  });

  it("should not authenticate witch invalid credentials", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticad", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123123",
    });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to acess private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const token = sign({ id: user.id }, process.env.APP_SECRET, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to acess private routes without jwt token", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app).get("/dashboard");

    expect(response.status).toBe(401);
  });

  it("should not be able to acess private routes with invalid jwt token", async () => {
    const user = await factory.create("User", {
      password: "123123",
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 123123`);

    expect(response.status).toBe(401);
  });
});
