import mongoose from "mongoose"
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_LINK)
        console.log("MONGODB connected!!!!")
        console.log(`${conn.connection.host}`)
    } catch (error) {
        console.log(`ERROR: ${error.message}`)
        process.exit(1) // 1 is failure 
    }
}