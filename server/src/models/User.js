const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  emailData: {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  creditCardData: {
    // cardNumber: { type: Number, required: true },
    expires: { type: Date, required: true },
    cvc: { type: Number, required: true },
  },
  addressData: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
