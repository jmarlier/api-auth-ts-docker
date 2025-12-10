import { Request, Response } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/users.service";

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

// 🔹 GET /users/:id
export const getUserByIdController = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "invalid user id" });
  }

  const user = getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.json(user);
};

// 🔹 PUT /users/:id
export const updateUserController = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "invalid user id" });
  }

  const { name, email } = req.body;

  if (name === undefined && email === undefined) {
    return res.status(400).json({
      error: "at least one field (name or email) is required",
    });
  }

  const updatedUser = updateUser(id, { name, email });

  if (!updatedUser) {
    return res.status(404).json({ error: "user not found" });
  }

  res.json(updatedUser);
};

// 🔹 DELETE /users/:id
export const deleteUserController = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "invalid user id" });
  }

  const deleted = deleteUser(id);

  if (!deleted) {
    return res.status(404).json({ error: "user not found" });
  }

  // 204 = No Content
  return res.status(204).send();
};