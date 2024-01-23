const mongoose = require("mongoose");

const EmailDataSchema = new mongoose.Schema({
  confirmEmail: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const CardDataSchema = new mongoose.Schema({
  cardNumber: { type: Number, required: true },
  cvc: { type: Number, required: true },
  expires: { type: Date, required: true },
});

const AddressDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
});

// Main user schema using the subschemas
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  emailData: { type: EmailDataSchema, required: true },
  addressData: { type: AddressDataSchema, required: true },
  cardData: { type: CardDataSchema, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
