import express from "express";
const router = express.Router();
import {
    createUser,
    loginUser,
    logoutCurrentUser
} from "../controllers/userController.js";

router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

export default router;