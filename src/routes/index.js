import express from "express";

import userRoutes from "./userRoutes";

// Router Instance
const router = express.Router()

// Routes modules
router.use("/users", userRoutes)


export default router;