import express from "express";
import { handleImage } from "../controllers/carFinderController";
import multer from "multer";

const carFinderRouter = express.Router();
const upload = multer();

carFinderRouter.post("/car_Finder", upload.single("image"), handleImage);

export default carFinderRouter;
