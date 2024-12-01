import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URI || "mongodb+srv://fufawakgari174:1234@cluster0.b7iu3.mongodb.net/";

  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Blog database connection is successful");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connectToDB;
