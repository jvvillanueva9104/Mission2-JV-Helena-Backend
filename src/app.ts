import express from "express";
import bodyParser from "body-parser";
import carFinderRouter from "./routes/carFinderRoutes";
const cors = require("cors");

//Enable express
const app = express();

//env file
require("dotenv").config();

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use("/", carFinderRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
