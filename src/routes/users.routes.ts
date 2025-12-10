import { Router } from "express";
import { getUsers, createUserController } from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUserController);

export default router;