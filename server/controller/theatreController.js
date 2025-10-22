const Theatre = require("../models/theatreSchema");

const addTheatre = async (req, res, next) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "New theatre has been added",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const updateTheatre = async (req, res, next) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body, {
      new: true,
    });
    res.send({
      success: true,
      message: "New theatre has been added",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const deleteTheatre = async (req, res, next) => {
  try {
    const newTheatre = req.params.theatreId;
    await newTheatre.findByIdAndDelete(theatreId);
    res.send({
      success: true,
      message: "theatre has been deleted",
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
const getAllTheatres = async (req, res, next) => {
  try {
    //remove password from owener object
    const allTheatres = await Theatre.find().populate("owner");

    res.send({
      success: true,
      message: "All the theatres fetched",
      data: allTheatres,
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};

const getAllTheatresByOwner = async (req, res, next) => {
  try {
    const allTheatres = await Theatre.find({ owner: req.body.userId });
    res.send({
      success: true,
      message: "All the theatres fetched",
      data: allTheatres,
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};

module.exports = {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwner,
};
