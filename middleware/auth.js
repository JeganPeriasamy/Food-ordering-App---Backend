import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next)=>{
        const {token} = req.headers;
        if(!token){
            return res.json({
                success:false,
                message:"Not Authorized , Login Again" 
            })
        }
        // To decode the getting token 
        try{
            const token_decode = jwt.verify(token,process.env.JWT_SECRET);
            // getting the Id in the token and setting it to the body of userId
            req.body.userId = token_decode.id;
            next();
        }
        catch(error){
                console.log(error);
                res.json({
                    success:false,
                    message:'error'
                })
        }

}

export default authMiddleware;