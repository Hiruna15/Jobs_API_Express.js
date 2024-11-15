import mongoose from "mongoose";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = (url) => {
  return mongoose.connect(url, clientOptions);
};

export default connectDB;
