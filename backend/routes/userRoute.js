// import { express } from 'express';
import express from "express"
// import pkg from 'express';
// const { express } = pkg;
import { loginUser,registerUser } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)

export default userRouter;
