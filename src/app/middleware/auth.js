import { verify } from "jsonwebtoken";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await verify(token, process.env.APP_SECRET);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};
