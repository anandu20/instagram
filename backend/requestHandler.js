import userSchema from "./models/user.model.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
import nodemailer from "nodemailer";
const {sign}=pkg;
const transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
      user: "ananduramachandran411@gmail.com",
      pass: "yttm rmjj dhok bchu",
    },
  });

export async function verifyEmail(req,res) {
    
    const {email}=req.body;
    console.log(email);
    
    const otp=Math.floor(Math.random()*1000000);
     // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Anandu"', // sender address
        to: `${email}`, // list of receivers
        subject: "OTP", // Subject line
        text: "your otp", // plain text body
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }
        h1 {
            color: #4CAF50;

        }
        p {
            font-size: 16px;
            color: #333333;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            font-size: 14px;
            color: #777777;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Email Verification</h1>
        <p>Thank you for signing up! Please check your inbox and click on the verification link we sent to your email address.</p>
        <p>If you don't see the email in your inbox, please check your spam or junk folder.</p>
        
        <a href="http://localhost:5173/register" class="button">Verify Email</a>

        <div class="footer">
            <p>If you didn't request this, please ignore this email.</p>
        </div>
    </div>

</body>
</html>
`, // html body
    });
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    userSchema.create({email}).then(()=>{
        return res.status(201).send({msg:"OTP succefully sent",email});
    }).catch((error)=>{
        return res.status(404).send({msg:"Error occured"})
    })
}

export async function signUp(req,res) {
    try {
        const {email,username,password,cpassword}=req.body;
        console.log(email,username,password,cpassword);
        if(!(email&&username&&password&&cpassword))
            return res.status(404).send({msg:"fields are empty"});
        if(password!==cpassword)
            return res.status(404).send({msg:"password not matched"})
        bcrypt.hash(password,10).then((hashedPassword)=>{
            console.log(hashedPassword);
            userSchema.updateOne({email},{$set:{username,password:hashedPassword}}).then(()=>{
                return res.status(201).send({msg:"success"});
            }).catch((error)=>{
                return res.status(404).send({msg:"Not registered"})
            })
        }).catch((error)=>{
            return res.status(404).send({msg:error}); 
        })

    } catch (error) {
        return res.status(404).send({msg:error});
    }
}

export async function signIn(req,res) {
    console.log(req.body);
    const {email,password}=req.body;
    if(!(email&&password))
        return res.status(404).send({msg:"feilds are empty"})
    const user=await userSchema.findOne({email})
    console.log("u");
    
    console.log(user);
    if(user===null)
        return res.status(404).send({msg:"invalid email"})

    //convert to hash and compare using bcrypt
    const success=await bcrypt.compare(password,user.password);
    console.log(success);
    if(success!==true)
        return res.status(404).send({msg:"email or password is invalid"})
    //generate token using sign(JWT key)
    const token=await sign({userId:user._id},process.env.JWT_KEY,{expiresIn:"24h"});
    console.log(token);
    return res.status(200).send({msg:"Succefully logged in",token})
}

export async function profile(req,res){
    try{
        console.log("fdf");
        
            const _id=req.user.userId;
            const user=await userSchema.findOne({_id});
            console.log(user);
            
            if(!user){
                return res.status(403).send({msg:"Unauthorized Access"})
            }
            // const profile=await profileSchema.findOne({userId:_id})
            res.status(200).send({username:user.username})
        }catch(error){
            res.status(404).send({msg:"error"})
        }
   }

export async function Home(req,res) {
    try {
  
      console.log(req.user.userId);
      const _id = req.user.userId;
      const user = await userSchema.findOne({_id});
      console.log(user);
      if(!user) 
          return res.status(403).send({msg:"Unauthorized access"})
      res.status(200).send({username:user.username})
      
  } catch (error) {
      res.status(404).send({msg:error})
  }
  }
  export async function ser(req,res) {
    const {email}=req.body;
    const data=await userSchema.deleteOne({email})
    console.log(data);
    
  }