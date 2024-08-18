import { Router } from "express";
import * as CC from "./brand.controller.js"
import * as Cv from "./brand.valdation.js"
import { multerHost,filtration } from "../../middleware/multer.js";
import { auth } from "../../middleware/auth.js";
import { systemroles } from "../../utils/systemroles.js";
import validation from "../../middleware/validation.js";
import brandRouter from "./../brand/brand.routes.js"
const router= Router()


router.post("/",multerHost(filtration.image).single("image"),
validation(Cv.addbrandValidation),auth([systemroles.user]),CC.addbrand)


router.put("/update/:id",multerHost(filtration.image).single("image"),
validation(Cv.updatebrandValidation),auth([systemroles.user]),CC.updatebrand)



router.get("/",
    CC.getbrand)




    router.delete("/delete/:id",auth(Object.values(systemroles)),CC.deletebrand)








export default router