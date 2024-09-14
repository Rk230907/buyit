import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db is connected successfully : ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error : ${e}`);
    process.exit(1);
  }
};

export default connectDB;
