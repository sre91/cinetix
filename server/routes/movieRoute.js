const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");
const { validateJWTTOKEN } = require("../middlewares/authorizationMiddleware");

const router = require("express").router();

router.post("/addMovie", validateJWTTOKEN, addMovie);
router.get("/getAllMovies", validateJWTTOKEN, getAllMovies);
router.patch("/updateMovie", validateJWTTOKEN, updateMovie);
router.delete("/deleteMovie", validateJWTTOKEN, deleteMovie);

module.exports = router;
