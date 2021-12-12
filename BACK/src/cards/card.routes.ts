import express, { Request, Response } from "express";

export const cardRouter = express.Router();

cardRouter.get("/", async (req: Request, res: Response) => {
  try {
   console.log("GET");
  } catch (e) {
    res.status(500).send(e.message);
  }
});