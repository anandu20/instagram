import { Router } from "express";
import * as insta from "./requestHandler.js"

const router=Router();

router.route("/verifyemail").post(insta.verifyEmail);
router.route("/checkotp").post(insta.checkOtp);
router.route("/signUp").post(insta.signUp);
router.route("/signIn").post(insta.signIn);

export default router;
