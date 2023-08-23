import { Request, Response } from "express";
import { carMakeSearcher, carModelSearcher } from "../services/carFinderService";

export const handleImage = async (req: Request, res: Response) => {
  try {

    const carMakePredic = await carMakeSearcher();
    const carModelPredic = await carModelSearcher();

    res.json({
      carMakePredic,
      carModelPredic,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
