import { CardDTO } from "./../dto/card.dto";
import express, { Request, Response } from "express";
import * as cardcontroller from "../controller/card";
import { body, validationResult } from "express-validator";

export const cardRouter = express.Router();

cardRouter.get("/", async (req: Request, res: Response) => {
  try {
    const results = await cardcontroller.getAll();
    return res.status(200).send(results);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

cardRouter.post(
  "/",
  [body("titulo").notEmpty(), body("conteudo").notEmpty()],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const payload: CardDTO = req.body;
      const result = await cardcontroller.create(payload);
      return res.status(200).send(result);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

cardRouter.put(
  "/:id",
  [body("titulo").notEmpty(), body("conteudo").notEmpty(),
    body('id').custom((value, { req }) => {
      if (value !== req.param.id) {
        return false;
      }
      return true;
    })
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const id = Number(req.params.id);
      const payload: CardDTO = req.body;

      const result = await cardcontroller.update(id, payload);
      return res.status(201).send(result);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);

cardRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await cardcontroller.deleteById(id);
    return res.status(result? 200: 404).send({
      success: result,
      ...(result ? {data: await cardcontroller.getAll()} : {})
    });
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
