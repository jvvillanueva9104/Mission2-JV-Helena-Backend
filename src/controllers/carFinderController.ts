import { Request, Response } from "express";
import {
  carMakeSearcher,
  carModelSearcher,
} from "../services/carFinderService";

export const handleImage = async (req: Request, res: Response) => {
  try {
    const arrayBuffer = req.file!.buffer;
    const buffer = Buffer.from(arrayBuffer);
    const carMakePredic = await carMakeSearcher(buffer);
    const carModelPredic = await carModelSearcher(buffer);

    res.json({
      carMakePredic,
      carModelPredic,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
