import express from "express";
import commonRoute from "./src/module/common.js";

const port = 3000;

const app = express();

app.use("/", commonRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
