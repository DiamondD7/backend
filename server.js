const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./models/productModel");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

//Serve static assets if in production
// if (process.env.NODE_ENV === "production") {

//   app.use(express.static("shoplift_client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "shoplift_client", "build", "index.html")
//     );
//   });
// }

app.get("/", (req, res) => res.send("Server is running..."));

const port = process.env.PORT || 5000;

const uri = process.env.API_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Successfully connected to the MongoDB");
});

const productRouter = require("./route/productsRouter");
const jacketRouter = require("./route/jacketRouter");
const hoodieRouter = require("./route/hoodieRouter");
const shirtRouter = require("./route/shirtRouter");
const accessoriesRouter = require("./route/accessoriesRouter");
const shoesRouter = require("./route/shoesRouter");
const userRouter = require("./route/userRouter");
const wdressRouter = require("./route/wdressRouter");
const whoodiesRouter = require("./route/whoodiesRouter");

app.use("/whoodies", whoodiesRouter);
app.use("/wdress", wdressRouter);
app.use("/users", userRouter);
app.use("/shoes", shoesRouter);
app.use("/accessories", accessoriesRouter);
app.use("/shirt", shirtRouter);
app.use("/hoodie", hoodieRouter);
app.use("/jackets", jacketRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
