import "../../src/database/index";
import User from "../../src/app/models/User";

describe("Authentication", () => {
  it("Some sum two numbers", async () => {
    const user = await User.create({
      name: "Leonardo",
      email: "email@email.com.br",
      password_hash: "jhbgsfcgvhjk76567",
    });
    console.log(user);
    expect(user.email).toBe("email@email.com.br");
  });
});
