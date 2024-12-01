import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://fufawakgari174:1234@cluster0.b7iu3.mongodb.net/";
  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog database connection is success"))
    .catch((error) => console.log(error.message));
};

export default connectToDB;