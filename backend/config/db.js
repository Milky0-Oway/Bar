import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.DB_SECRET).then(() => console.log("DB Connected"));
}