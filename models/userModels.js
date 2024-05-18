import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
     // If email already exists we cannot add the same mail     
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}  // By default cart wil be empty object 
},{minimize:false}) // To Create the cartData without any data we are using this 



// If the model is already created we will use that (.user) or it will create it new
const userModel = mongoose.models.user || mongoose.model("user",userSchema)
export default userModel;

