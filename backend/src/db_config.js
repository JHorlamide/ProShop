import mongoose from 'mongoose';
// process.env.MONGO_URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(' mongodb://localhost:27017/proshop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(
      `Mongodb connected... ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
