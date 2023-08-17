import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log("Mongo Connected successfully!")
        })
        connection.on('error', (err)=>{
            console.log("there are errors " + err)
            process.exit()
        })


    } catch (error) {
        console.log("error")
        console.log(error)
    }
}