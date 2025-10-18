const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res, next) => {
  try {
    const userExists = await userModel.findOne({ email: req?.body?.email });
    if (userExists) {
      return res.send({
        sucess: false,
        message: "user already exists",
      });
    }
    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(req?.body?.password, salt);
    console.log("hash pass: ", hashpass);
    req.body.password = hashpass;
    const newUser = new userModel(req?.body);
    await newUser.save();
    res.send({
      success: true,
      message: "registeration successfull, please login",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//login
const loginUser = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ email: req?.body?.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist. please register",
      });
    }
    const validatePassword = await bcrypt.compare(
      req?.body?.password,
      user?.password
    );

    if (!validatePassword) {
      return res.send({
        sucess: false,
        message: "please enter valid password",
      });
    }

    const token = jwt.sign(
      { userID: user._id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.send({
      success: true,
      message: "you are successfully Logged in",
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User details fetched succesfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
