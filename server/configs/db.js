import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    console.log("MONGODB_URL:", process.env.MONGODB_URL);
    await mongoose.connect(`${process.env.MONGODB_URL}/quickblog`);

    isConnected = true;
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectDB;
