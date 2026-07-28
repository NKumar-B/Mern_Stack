const express =require("express");
const mongoose=require("mongoose");
const cors =require("cors");
require("dotenv").config();

const app=express();
app.use(cors({origin:"http://localhost:5175",credentials:true}));
app.use(express.json());

const PORT =process.env.PORT || 5000;

const MONGODB_URI=process.env.MONGODB_URI || "mongodb://localhost:27017/contactDB";


mongoose.connect(MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

const contactSchema = new mongoose.Schema({
    name:{ type:String, required:[true,"Name is required"],trim:true},
    email:{type:String, required:[true,"Email is required"],trim:true},
    message:{type:String, required:[true,"Message is required"]}
    },{timestamps:true}
);

const Contact = mongoose.model("Contact", contactSchema);

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.send("Contact saved successfully");
}); 

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});
