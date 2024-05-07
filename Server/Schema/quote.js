let mongoose = require("mongoose");

let QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: Number, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
let Quote = mongoose.model("myQuote", QuoteSchema);
module.exports = Quote;
