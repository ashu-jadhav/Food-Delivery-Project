import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ashujadhav:987654321@cluster0.cgzuu1e.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}
