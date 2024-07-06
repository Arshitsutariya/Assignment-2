const mongoose = require("mongoose");

const schema = mongoose.Schema({
 
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  img:{
    type:String,
    required:true,
  },
});

module.exports = mongoose.model("Product", schema);