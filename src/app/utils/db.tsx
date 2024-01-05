import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

// const MONGO_URI = process.env.MONGO_URI!;

if (!process.env.MONGO_URI) {
  throw new Error("redefine mongodb_uri environment variable");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  console.log("Attempting to connect to MongoDB...");
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(process.env.MONGO_URI!, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  try {
    cached.conn = await cached.promise;
    console.log("CONNECTED TO MONGODB");
    return cached.conn;
  } catch (e) {
    console.error("MongoDB connection error:", e);
    cached.promise = null;
    throw e;
  }
  // console.log("CONNECTED TO MONGODB");
}

export default connectDb;
