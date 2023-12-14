import express from "express";
import { connectMongoDb, Collections } from "./database/index.js";

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, gmail, password, confirmpassword } = req.body;
  const newuser = { name, gmail, password, confirmpassword };
  const check = await Collections["USERS"].findOne({ gmail });
  if (check) {
    res.send({ msg: "Thất bại" });
    return;
  } else {
    const createuser = await Collections["USER"].insertOne(newuser);
    res.send({ msg: "Thành công", data: createuser });
  }
});

app.listen(8001, () => {
  console.log("Sever is running !");
  connectMongoDb();
});
