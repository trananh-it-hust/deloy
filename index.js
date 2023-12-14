import express from "express";
import { connectMongoDb, Collections } from "./database/index.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Thành công");
});
app.listen(8004, () => {
  console.log("Sever is running !");
});
