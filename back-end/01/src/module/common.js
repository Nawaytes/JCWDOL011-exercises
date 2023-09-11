import express from "express";
const commonRoute = express.Router();

commonRoute.use((req, res, next) => {
  console.log("Time:", Date.now());
  console.log(
    `${req.method} ${req.originalUrl} ${
      req.protocol
    } time: ${Date.now().toLocaleString()}`
  );
  next();
});

commonRoute.get("/", (req, res) => {
  res.send("Hello World!");
});

commonRoute.post("/", (req, res) => {
  res.send("Got a POST request");
});

commonRoute.put("/", (req, res) => {
  res.send("Got a PUT request ");
});

commonRoute.delete("/", (req, res) => {
  res.send("Got a DELETE request ");
});

commonRoute.patch("/", (req, res) => {
  res.send("Got a PATCH request ");
});

export default commonRoute;
