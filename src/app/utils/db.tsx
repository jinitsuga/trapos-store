import mongoose from "mongoose";

declare global {
  var mongoose: any;
}

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!process.env.MONGODB_URI) {
//   throw new Error("redefine mongodb_uri environment variable");
// }

// let cached = global.mongoose;

// if (!cached) {
//   console.log("cached undefined");
//   cached = global.mongoose = { conn: null, promise: null };
// }

async function connectDb() {
  mongoose.connect(process.env.MONGODB_URI!, { bufferCommands: false });

  // console.log("Attempting to connect to MongoDB...");
  // console.log(process.env.MONGODB_URI);
  // if (cached.conn) {
  //   return cached.conn;
  // }
  // if (!cached.promise) {
  //   const opts = {
  //     bufferCommands: false,
  //   };
  //   cached.promise = mongoose
  //     .connect(process.env.MONGODB_URI!, opts)
  //     .then((mongoose) => {
  //       return mongoose;
  //     });
  // }
  // try {
  //   cached.conn = await cached.promise;
  //   console.log("CONNECTED TO MONGODB");
  //   return cached.conn;
  // } catch (e) {
  //   console.error("MongoDB connection error:", e);
  //   cached.promise = null;
  //   throw e;
  // }
}

export default connectDb;
