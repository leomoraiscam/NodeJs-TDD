import User from "../models/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const matchPassword = await compare(password, user.password_hash);

    if (!matchPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = sign({}, process.env.APP_SECRET, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    return res.json({ user, token });
  }
}

export default new SessionController();
