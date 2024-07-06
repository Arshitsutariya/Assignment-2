const mongoose = require("mongoose");

const schema = mongoose.Schema({

  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", schema);