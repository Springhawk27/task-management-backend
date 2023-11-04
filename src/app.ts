/* eslint-disable no-unused-vars */
import express, { Application } from "express";
const app: Application = express();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
