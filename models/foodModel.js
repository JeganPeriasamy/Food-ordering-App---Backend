// To store the products in the database

import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})


// Using the schema above we will create the model
const foodModel = mongoose.models.food || mongoose.model ("food",foodSchema) // if there it will be used dor it will create new one 
export default foodModel;