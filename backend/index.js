const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routers/Routes");

const app = express();

// app.get("/api", (req, res) => {
//   res.send("hello uni");
// });

app.use(express.json());

app.use("/api", router);

const url =
  "mongodb+srv://admin_mayank:YaZwjNF1ZfH2oCQK@cluster0.ntdiywr.mongodb.net/?retryWrites=true&w=majority";
// const connect = mongoose
//   .connect(url)
//   .then(() => app.listen(5000))
//   .then(() => console.log("Server is running on localhost 5000"));

const connect =
  (mongoose.connect(url),
  app.listen(5000, () => {
    console.log("Database Connected! , Server Is Running on port 5000");
  }));

//   app.listen(5000,()=>{
//     console.log("nice")
//   })
