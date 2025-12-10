import { Request, Response } from "express";
import { getAllUsers, createUser } from "../services/users.service";

export const getUsers = (_req: Request, res: Response) => {
  const users = getAllUsers();
  res.json(users);
};

export const createUserController = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "name and email are required",
    });
  }

  const newUser = createUser({ name, email });
  res.status(201).json(newUser);
};