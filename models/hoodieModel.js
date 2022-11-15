const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoodieSchema = new Schema(
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

const Hoodie = mongoose.model("Hoodie", hoodieSchema);
module.exports = Hoodie;
