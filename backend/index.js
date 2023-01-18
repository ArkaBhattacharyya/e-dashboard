const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const product = require('./db/Product');
const Product = require('./db/Product');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
})

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    }
    else{
      resp.send({result: "No Data found"});
    }
  }else{
    resp.send({result: "No User found"});
  }
})
app.post("/add-product", async (req,resp)=>{
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
})

app.get("/products", async (req,resp)=>{
  let products = await Product.find();
  if(products.length>0){
    resp.send(products);
  }else{
    resp.send({result:"No product found"});
  }
  
})

app.delete("/product/:id", async (req,resp)=>{
   let result = await Product.deleteOne({_id:req.params.id});
   resp.send(result);
})

app.get("/product/:id", async(req,resp)=>{
 let result = await Product.findOne({_id:req.params.id});
 if(result){
  resp.send(result);
 }else{
  resp.send({result:"No Data found"});
 }
})

app.put("/product/:id", async(req,resp)=>{
  let result = await Product.updateOne(
    {_id:req.params.id},
    {
      $set : req.body
    }
  )
  resp.send(result);
});

const port = 3500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})