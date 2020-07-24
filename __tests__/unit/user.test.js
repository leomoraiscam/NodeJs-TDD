import "../../src/database";
import User from "../../src/app/models/User";
import bcrypt from "bcryptjs";
import truncate from "../utils/truncate";

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "test user",
      email: "email@email.com.br",
      password: "123456",
    });

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
