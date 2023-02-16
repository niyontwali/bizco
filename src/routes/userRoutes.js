import express from "express";
import { users } from "../constants/dummy";

// Inititalize route
const router = express.Router();

// routes
router.get("/users", (req, res) => {
  res.status(200).json({
    status: "ok",
    data: users
  });
});


export default router;