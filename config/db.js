import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};


// mongodb+srv://jegan7798:Jegan7798@clusterjegan.lxidx3w.mongodb.net/?
