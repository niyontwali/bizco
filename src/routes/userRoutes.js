import express from "express";
import {usersController} from "../controllers/"

// Inititalize route
const router = express.Router();

// routes
router.get("/", usersController.getUsers);


export default router;