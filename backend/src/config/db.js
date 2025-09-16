import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://himarasamaranayake_db_user:mrzfdss0mueCG3zO@cluster0.pupzfc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log("server started on port: 5001");
        process.exit(1);
    }
}