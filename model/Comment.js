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
  
  desc: {
    type: String,
    required: true,
  },
  rating:{
    type:String,
    required:true,
  }
});

module.exports = mongoose.model("Comment", schema);