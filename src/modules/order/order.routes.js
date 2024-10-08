import { Router }from "express"
import * as OC from "./order.controller.js"
import * as OV from "./order.validation.js"
import { auth } from "../../middleware/auth.js"
import { systemroles } from "../../utils/systemroles.js"
import validation from "../../middleware/validation.js"
import express from "express"
const router=Router()







router.post("/add",validation(OV.createordervalidation),auth(Object.values(systemroles)),OC.createorder)
router.put("/:id",validation(OV.cancelOrdervalidation),auth(Object.values(systemroles)),OC.cancelOrder)


router.post('/webhook', express.raw({ type: 'application/json' }),OC.webhook)



export default router
