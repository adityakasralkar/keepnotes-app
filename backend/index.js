import express from "express";
import dotenv from "dotenv";
import notes from "./data/notes.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

connectDB();


const PORT  = process.env.PORT || 5000;


app.get('/' , (req,res) => {
    res.send("API is Runing");
})

app.get('/api/notes' , (req, res) => {
    res.json(notes)
}) ;

app.get('/api/notes/:id' , (req, res) => {
   const note =notes.find((n) => n._id === req.params.id);
   
   res.send(note);
}) 


app.listen(PORT , () => {
    console.log(`Server is Runnning on Port : ${PORT}`);
});