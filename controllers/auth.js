import UserModel from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const user = await UserModel.create({ ...req.body });

  const token = user.generateJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send("Login");
};

export { register, login };
