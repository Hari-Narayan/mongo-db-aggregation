const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const saleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  store: { type: String, required: true },
  items: [itemSchema],
});

const Sales = mongoose.model("Sale", saleSchema);

module.exports = Sales;
