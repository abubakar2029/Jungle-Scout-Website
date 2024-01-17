const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
