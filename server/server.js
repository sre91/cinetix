const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const errorHandler = require("./middlewares/errorHandler");
const theatreRouter = require("./routes/theatreRoute");
const { validateJWTTOKEN } = require("./middlewares/authorizationMiddleware");

connectDB();

app.use(express.json());
app.use("/bms/v1/users", userRoute);
app.use("/bms/v1/movies", validateJWTTOKEN, movieRoute);
app.use("/bms/v1/theatres", validateJWTTOKEN, theatreRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server is running in ${process.env.PORT}`);
});
