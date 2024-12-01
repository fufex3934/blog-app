import mongoose from "mongoose";
import {dotenv} from "dotenv";
const connectToDB = async () => {
    dotenv.config();
  const connectionUrl = process.env.MONGODB_URI || "mongodb+srv://fufawakgari174:1234@cluster0.b7iu3.mongodb.net/";
    
  
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is success"))
    .catch((error) => console.log(error.message));
};

export default connectToDB;