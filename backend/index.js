const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const { findOne } = require('./db/User');
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
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    }
    else {
      resp.send({ result: 'No User Found' })
    }
  }
})

const port = 3500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})