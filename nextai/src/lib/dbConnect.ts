import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Server is already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_UI || "", {});
    console.log(db);

    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
}

export default dbConnect;
