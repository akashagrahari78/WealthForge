const express = require("express")
const {userLogin,  userRegister, handleUserContact} = require("../controllers/userController.js");
const { authUser } = require("../middlewares/auth.js");
 
const userRouter = express.Router();


userRouter.post("/register", userRegister)
userRouter.post("/login", userLogin)
userRouter.post("/email",authUser)
userRouter.post("/contact", handleUserContact) //this is currently in use 
  

module.exports = userRouter