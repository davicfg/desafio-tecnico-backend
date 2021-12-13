import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { cardRouter } from "./api/routes/card.routes"
import { authRouter } from "./api/routes/auth.routes";
import dbInit from './database/init'

dbInit()

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/cards", cardRouter);
app.use("/login", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});