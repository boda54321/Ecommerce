import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectionDB from "./db/connectionDB.js"
import { AppError } from "./src/utils/classError.js"
import {  globalErrorHandling } from "./src/utils/asyncHandler.js"
import userRouter from "./src/modules/users/user.routes.js"
import categoryRouter from "./src/modules/category/category.routes.js"
import subcategoryRouter from "./src/modules/subcategory/subcategory.routes.js"
import brandRouter from "./src/modules/brand/brand.routes.js"
import productRouter from "./src/modules/product/product.routes.js"
import couponRouter from "./src/modules/coupon/coupon.routes.js"
import cartRouter from "./src/modules/cart/cart.routes.js"
import orderRouter from "./src/modules/order/order.routes.js"
import wishlistRouter from "./src/modules/wishlist/wishlist.routes.js"
import reviewRouter from "./src/modules/review/review.routes.js"
import cors from "cors"



const app=express();
app.use(cors());

app.use((req, res, next) => {
    if (req.originalUrl == "/order/webhook") {
        next()
    } else {
        express.json()(req, res, next)
}
})

app.get("/",(req,res)=>{
    res.status(200).json({msg:"hello on my project"});
})


app.use("/users",userRouter)
app.use("/category",categoryRouter)
app.use("/subcategory",subcategoryRouter)
app.use("/brand",brandRouter)
app.use("/product",productRouter)
app.use("/coupon",couponRouter)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)
app.use("/wishlist",wishlistRouter)
app.use("/review",reviewRouter)
app.use( globalErrorHandling)



connectionDB()

app.use("*", ( req,res,next )=>{
    return next(new AppError("404 not found"))

})



app.listen(5000,()=>{
    console.log("server is running on port 5000");
})