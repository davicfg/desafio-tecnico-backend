import express, { Request, Response } from "express";

export const cardRouter = express.Router();

cardRouter.get("/", async (req: Request, res: Response) => {
  try {
   console.log("GET");
  } catch (e: any) {
    res.status(500).send(e.message);
  } 
});

cardRouter.post("/", async (req: Request, res: Response) => {
  try {
   console.log("POST");
  } catch (e: any) {
    res.status(500).send(e.message);
  } 
});

cardRouter.put("/:id", async (req: Request, res: Response) => {
  try {
   console.log("PUT");
  } catch (e: any) {
    res.status(500).send(e.message);
  } 
});

cardRouter.put("/:id", async (req: Request, res: Response) => {
  try {
   console.log("DELETE");
  } catch (e: any) {
    res.status(500).send(e.message);
  } 
});