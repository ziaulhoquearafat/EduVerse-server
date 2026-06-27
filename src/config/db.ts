import mongoose from "mongoose";

declare global {
  var __mongooseConn: Promise<typeof mongoose> | undefined;
}

const connectWithOptions = async () => {
  const uri = process.env.MONGO_URI!;

  const isProduction = process.env.NODE_ENV === "production";

  mongoose.set("bufferTimeoutMS", isProduction ? 30000 : 60000);

  return mongoose.connect(uri, {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 20000,
    socketTimeoutMS: 60000,
    maxPoolSize: isProduction ? 20 : 10,
    minPoolSize: isProduction ? 5 : 2,
    bufferCommands: false,
    retryWrites: true,
  });
};

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    if (!global.__mongooseConn) {
      global.__mongooseConn = connectWithOptions();
    }
    await global.__mongooseConn;
    console.log("MongoDB connected successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

export default connectDB;
