const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jacketSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productDimensions: {
      type: String,
    },
    productColor: {
      type: String,
      trim: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

const Jackets = mongoose.model("Jackets", jacketSchema);
module.exports = Jackets;
