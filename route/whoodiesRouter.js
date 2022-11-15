const router = require("express").Router();
const WHoodies = require("../models/whoodiesModel");

router.route("/").get((req, res) => {
  WHoodies.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const productName = req.body.productName;
  const productColor = req.body.productColor;
  const productDescription = req.body.productDescription;
  const productDimensions = req.body.productDimensions;
  const productImage = req.body.productImage;
  const productPrice = req.body.productPrice;

  const newhoodie = new WHoodies({
    productDescription,
    productName,
    productPrice,
    productDimensions,
    productColor,
    productImage,
  });

  newhoodie
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req, res) => {
  WHoodies.findById(req.params.id)
    .then((hoodie) => {
      hoodie.productColor = req.body.productColor;
      hoodie.productDescription = req.body.productDescription;
      hoodie.productDimensions = req.body.productDimensions;
      hoodie.productImage = req.body.productImage;
      hoodie.productName = req.body.productName;
      hoodie.productPrice = req.body.productPrice;

      hoodie
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  WHoodies.findByIdAndDelete()
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
