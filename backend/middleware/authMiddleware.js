import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
       try {
           token = req.headers.authorization.split(' ')[1]

           const decoded = jwt.verify(token, process.env.JWT_SECRET) // getting user by token

           // all the data of the user will be in the req.user which has access to all of our protected route
           req.user = await User.findById(decoded.id).select('-password') //we dont need user password here 
           
           next()
       } catch (error) {
           console.log(error);
           res.status(401)
        throw new Error('Not authorized, token failed')
       }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    } 
})