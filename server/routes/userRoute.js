const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controller/UserController");
const { validateJWTTOKEN } = require("../middlewares/authorizationMiddleware");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getCurrentUser", validateJWTTOKEN, currentUser);

module.exports = router;
