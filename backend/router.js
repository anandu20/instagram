import { Router } from "express";
import * as insta from "./requestHandler.js"

const router=Router();

router.route("/verifyemail").post(insta.verifyEmail);
router.route("/signup").post(insta.signUp);
router.route("/signin").post(insta.signIn);

export default router;
