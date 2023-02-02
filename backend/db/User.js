const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
});
userSchema.pre('save', async function (next){
  try{
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(this.password,salt)
   this.password = hashPassword;
   next()
  }catch(error){
    next(error)

  }
})
userSchema.methods.isvalidPassword = async function(password){
  try {
     return await bcrypt.compare(password,this.password)
  } catch (error) {
    throw(error)
  }
}
module.exports = mongoose.model('users',userSchema);