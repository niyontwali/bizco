import express from "express";
import { usersController } from "../controllers/";

// Inititalize route
const router = express.Router();

// routes
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);


export default router;