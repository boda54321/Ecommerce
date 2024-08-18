import mongoose from "mongoose";



const connectionDB= async()=>{
    return await mongoose.connect(process.env.databaseonline)
        .then(()=>{
            console.log(`connected to database on ${process.env.databaseonline}`)
        }).catch((err)=>{
            console.log({ msg: "fail to connect", err })
        })
    
}

export default connectionDB