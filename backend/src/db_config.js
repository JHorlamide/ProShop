import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_URL =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI
    : process.env.DB_URL_LOCAL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`Mongodb connected... ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
