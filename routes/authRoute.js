import express from "express"

const router = express.Router()

import {forgotPasswordController, loginController, registerController,testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//register
router.post("/register",registerController);

//login
router.post("/login",loginController);

router.post('/forgot-password', forgotPasswordController)

router.get('/test',requireSignIn, isAdmin  ,testController)

// protected route

router.get('/user-auth',requireSignIn, (req,res)=>
{
    res.status(200).send({
        ok:true,
    })
})

router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>
{
    res.status(200).send({
        ok:true,
    })
})

export default router