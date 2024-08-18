import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.cloudname,
    api_key: process.env.api_key,
    api_secret: process.env.apisecret
})

export default cloudinary