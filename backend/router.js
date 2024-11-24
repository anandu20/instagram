import { Router } from "express";
import * as insta from "./requestHandler.js"
import Auth from "./middleware/Auth.js";

const router=Router();

router.route("/verifyemail").post(insta.verifyEmail);
router.route("/signup").post(insta.signUp);
router.route("/signin").post(insta.signIn);
router.route("/home").get(Auth,insta.Home);


export default router;
