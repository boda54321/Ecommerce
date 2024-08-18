import { Router } from "express";
import * as RC from "./review.controller.js"
import * as RV from "./review.validation.js"
import { auth } from "../../middleware/auth.js";
import { systemroles } from "../../utils/systemroles.js";
import validation from "../../middleware/validation.js";

const router = Router()


router.post("/",validation(RV.addreviewvalidation),auth([systemroles.user]),RC.addreview)








export default router