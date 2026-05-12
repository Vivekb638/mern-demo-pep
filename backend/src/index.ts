import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("yelooo");
});

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
