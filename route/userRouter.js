const router = require("express").Router();
let User = require("../models/usersModel");

router.route("/").get((req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ADD

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    username,
    password,
  });

  newUser
    .save()
    .then(() => res.json("Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      data.firstName = req.body.firstName;
      data.lastName = req.body.lastName;
      data.email = req.body.email;
      data.phoneNumber = req.body.phoneNumber;
      data.username = req.body.username;
      data.password = req.body.password;

      data
        .save()
        .then(() => res.json("Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//DELETE
router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
