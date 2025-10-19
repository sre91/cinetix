const movieModel = require("../models/movieSchema");

const addMovie = async (req, res, next) => {
  try {
    //handle duplicate entries
    const newMovie = new movieModel(req?.body);
    await newMovie.save();
    res.send({ success: true, message: "New movie has been added" });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.send({
      success: true,
      message: "All movie has been fetched",
      data: allMovies,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
const updateMovie = async (req, res, next) => {
  try {
    const movie = await movieModel.findByIdAndUpdate(
      req?.body?.movieId,
      req.body,
      { new: true }
    );
    res.send({
      success: true,
      message: "The movie has been updated",
      data: movie,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
const deleteMovie = async (req, res, next) => {
  try {
    const movie = await movieModel.findByIdAndDelete(req?.body?.movieId);
    res.send({
      success: true,
      message: "The movie has benn deleted",
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
