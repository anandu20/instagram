import { Router } from "express";
import * as insta from "./requestHandler.js"
import Auth from "./middleware/Auth.js";

const router=Router();

router.route("/verifyemail").post(insta.verifyEmail);
router.route("/signup").post(insta.signUp);
router.route("/signin").post(insta.signIn);
router.route("/home").get(Auth,insta.Home);
router.route("/profile").get(Auth,insta.profile);
router.route("/ser").delete(insta.ser);
router.route("/edituser").post(Auth,insta.editUser);
router.route("/addpost").post(insta.addPost);
router.route("/getpost").get(Auth,insta.getPost);



export default router;
