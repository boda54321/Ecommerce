import express from "express"
import * as UC from "./user.controller.js"
import {auth} from "../../middleware/auth.js"
import { systemroles } from "../../utils/systemroles.js"
const router= express()



router.post("/signup",UC.signUp)
router.get("/signin",UC.signin)
router.get("/confirmEmail/:token",UC.confirmEmail)
router.get("/reconfirmEmail/:reftoken",UC.refConfirmEmail)
router.put("/forget",UC.forgetpassword)
router.put("/reset",UC.resetpassword)
router.get("/data/:id",UC.getData)
router.delete("/deleted/",auth([systemroles.user]),UC.deleteuser)













export default router