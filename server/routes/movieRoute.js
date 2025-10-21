const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");

const router = require("express").router();

router.post("/addMovie", addMovie);
router.get("/getAllMovies", getAllMovies);
router.patch("/updateMovie", updateMovie);
router.delete("/deleteMovie/:movieId", deleteMovie);

module.exports = router;
