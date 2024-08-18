import jwt from "jsonwebtoken";
import userModel from "../../db/models/user.model.js";
import { AppError } from "../utils/classError.js";


export const auth = (roles=[]) => {
    return async (req, res, next) => {
        try {
            const { token } = req.headers
            if (!token) {
                return next(new AppError("cant find token"))
            }
            if (!token.startsWith(process.env.start)) {
                return next(new AppError("token is not valid"));
            }
            const newtoken = token.split(process.env.start)[1]
            if (!newtoken) {
                return next(new AppError("token is not valid"));;
            }
            const decoded = jwt.verify(newtoken, process.env.ts)
            if (!decoded?.id) {
                return next(new AppError("invalid paylod"));;
            }
            const user = await userModel.findById(decoded.id)
            if (!user) {
                return next(new AppError("cant find user"));;
            }
            if (!roles.includes(user.role)) {
               return next(new AppError("you dont have permition"));;
            }
            if(parseInt(user?.changepassword?.getTime()/1000)>decoded.iat){
                return next(new AppError("you need to  login"));
            }
            req.user = user
            next()
        } catch (error) {
            return res.json({msg:"catch error",error:error.message})
        } 
    }
}

auth()