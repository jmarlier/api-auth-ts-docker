import { Router } from "express";
import {
  getUsers,
  createUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUserController);
router.get("/users/:id", getUserByIdController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;