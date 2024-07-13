import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controllers/user.js";

const router = express.Router();

//Update
router.put("/:id", updatedUser);
//Delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Get all
router.get("/", getUsers);
export default router;
