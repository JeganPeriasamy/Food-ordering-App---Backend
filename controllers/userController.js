import userModel from "../models/userModels.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// login user 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User doesn't exist. Kindly register.",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password. Please try again.",
            });
        }
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ success: false, message: "Error in login." });
    }
};





// register user 
const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{
        // Checking User Already exists 
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({
                success:false,
                message:"User Already Exists "
            })
        }
        // Validating email format and strong password 
        if (!validator.isEmail(email)){
           return res.json({
                success:false,
                message:"Please enter the valid Email"
            })
        }
        // Validating the password 
        if (password.length < 8){
            return res.json({
                success:false,
                message:"Please Enter the Strong password"
            })
        }

        // To encrypt the password  - Use:Encrypt - Hashing user password 
        const salt = await bcrypt.genSalt(10) 
        const hashedPassword = await bcrypt.hash(password,salt)

        // To create the new user
        const newUser = new userModel ({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
        // To save the user in the database 

        // Generating token and passing to the user 
        const token = createToken(user._id)
        res.json({success:true,token})

    }
    catch(error)
    {
        console.log(error)
        res.json({success:false,message:"Error on generating USER"})
    }
}

export{registerUser,loginUser}
