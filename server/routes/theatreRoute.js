const {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
} = require("../controller/theatreController");

const router = require("express").Router();

router.post("/addTheatre", addTheatre);
router.patch("/updateTheatre", updateTheatre);
router.delete("/deleteTheatre/:theatreId", deleteTheatre);
router.get("/getAllTheatres", getAllTheatres);

module.exports = router;
