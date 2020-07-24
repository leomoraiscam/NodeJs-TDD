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
      email: "email@testa.com.br",
      password: "123123",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      senha: "123123",
    });

    expect(response.status).toBe(200);
  });
});
