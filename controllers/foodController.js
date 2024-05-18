import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood = async (req,res)=>{
      let image_filename = `${req.file.filename}` ;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({
            success:true,
            message:"Food Added"})
    }catch(error){
            console.log(error)
            res.json({
                success:false,
                message:"error on saving food"
            })
    }
}

// To Access GET All Food list 
const listFood = async(req,res)=>{
try{
    const foods = await foodModel.find({});
    res.json({
        success:true,
        data:foods
    })
}catch(error){
    console.log(error);
    res.json({
        success:false,
       message:"Error in listing food"
    })
}
    
}

// To Remove the item from the database
const removeFood = async(req,res)=>{
    try{
        // To remove it from the upload folder
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        

        // To remove the data from the Database
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({
            success:true,
            message:"Food Removed "
        })
    }catch(error){
        console.log(error);
        res.json({
            success:false,
           message:"Error in removing food"
        })

    }
        
    }

export{addFood,listFood,removeFood}