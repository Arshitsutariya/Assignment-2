const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const URL =
// "mongodb+srv://root:root12@cluster0.7mlkny0.mongodb.net/Ass3?retryWrites=true&w=majority"
const user = require("./model/User")
const order = require("./model/Order")
const product = require("./model/Product")
const cart = require("./model/Cart")
const comment = require("./model/Comment")
const uri = "mongodb+srv://arshit123:arshit123@test.3w3gk3r.mongodb.net/?retryWrites=true&w=majority&appName=test";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch(error => console.error('Database connection error:', error));

app.use(express.json());
const db = mongoose.db;

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.post("/users", async (req, res) => {
  const nuser = await user.create(req.body);
  res.status(200).json(nuser);

});

app.get("/users", async (req, res) => {
  
  const users = await user.find();
  if (users.length > 0) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: 'No results found' });
  }
});
app.post("/products", async (req, res) => {
  const nproduct = await product.create(req.body);
  res.status(200).json(nproduct);

});
app.get("/products", async (req, res) => {
  
  const products = await product.find();
  if (products.length > 0) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: 'No results found' });
  }
});
app.post("/cart", async (req, res) => {
  const ncart = await cart.create(req.body);
  res.status(200).json(ncart);

});
app.get("/cart", async (req, res) => {
  
  const carts = await cart.find();
  if (carts.length > 0) {
    const data = [];

    for (const cart of carts) {
      const eproduct = await product.findById(cart.productId);
      const euser = await user.findById(cart.userId);

      if (eproduct && euser) {
        data.push({
          id: cart._id,
          qty: cart.qty,
          product: eproduct,
          user: euser,
        });
      }
    }

    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'No results found' });
  }
});
app.post("/orders", async (req, res) => {
  const norders = await order.create(req.body);
  res.status(200).json(norders);

});
app.get("/orders", async (req, res) => {
  
  const orders = await order.find();
  if (orders.length > 0) {
    const data = [];

    for (const order of orders) {
      const eproduct = await product.findById(order.productId);
      const euser = await user.findById(order.userId);

      if (eproduct && euser) {
        data.push({
          id: order._id,
          product: eproduct,
          user: euser,
        });
      }
    }

    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'No results found' });
  }
});
app.post("/comments", async (req, res) => {
  const ncomments = await comment.create(req.body);
  res.status(200).json(ncomments);

});
app.get("/comments", async (req, res) => {
  
  const comments = await comment.find();
  if (comments.length > 0) {
    const data = [];

    for (const comment of comments) {
      const eproduct = await product.findById(comment.productId);
      const euser = await user.findById(comment.userId);

      if (eproduct && euser) {
        data.push({
          id: comment._id,
          rating: comment.rating,
          desc: comment.desc,
          product: eproduct,
          user: euser,
        });
      }
    }

    res.status(200).json(data);
  }  else {
    res.status(404).json({ message: 'No results found' });
  }
});
app.use(express.json());