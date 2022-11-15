const router = require("express").Router();
let Hoodie = require("../models/hoodieModel");

//GET ALL PRODUCTS
router.route("/").get((req, res) => {
  Hoodie.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET:id

router.route("/get/:id").get((req, res) => {
  Hoodie.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ADD NEW PRODUCTS

router.route("/add").post((req, res) => {
  const productName = req.body.productName;
  const productPrice = Number(req.body.productPrice);
  const productDimensions = req.body.productDimensions;
  const productColor = req.body.productColor;
  const productDescription = req.body.productDescription;
  const productImage = req.body.productImage;

  const newProduct = new Hoodie({
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

//UPDATE

router.route("/edit/:id").post((req, res) => {
  Hoodie.findById(req.params.id)
    .then((items) => {
      items.productName = req.body.productName;
      items.productColor = req.body.productColor;
      items.productDimensions = req.body.productDimensions;
      items.productPrice = Number(req.body.productPrice);
      items.productImage = req.body.productImage;
      items.productDescription = req.body.productDescription;

      items
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE

router.route("/delete/:id").delete((req, res) => {
  Hoodie.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
