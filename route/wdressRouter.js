const router = require("express").Router();
const WDress = require("../models/wdressModel");

router.route("/").get((req, res) => {
  WDress.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;
  const productColor = req.body.productColor;
  const productDimensions = req.body.productDimensions;
  const productDescription = req.body.productDescription;
  const productImage = req.body.productImage;

  const newProduct = new WDress({
    productName,
    productPrice,
    productColor,
    productDimensions,
    productDescription,
    productImage,
  });

  newProduct
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req, res) => {
  WDress.findById(req.params.id)
    .then((data) => {
      data.productName = req.body.productName;
      data.productPrice = req.body.productPrice;
      data.productColor = req.body.productColor;
      data.productDimensions = req.body.productDimensions;
      data.productDescription = req.body.productDescription;
      data.productImage = req.body.productImage;

      data
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  WDress.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
