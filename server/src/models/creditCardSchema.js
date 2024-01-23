const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
  cardNumber: { type: Number, required: true },
  cvc: { type: Number, required: true },
  expires: { type: Date, required: true },
});

const creditCard = mongoose.model("Address", creditCardSchema);

module.exports = creditCard;
