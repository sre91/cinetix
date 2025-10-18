const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log("connection succesfully established");
  } catch (error) {
    console.log("not connected check again ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
