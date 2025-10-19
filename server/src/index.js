import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT;
app.use(express.json());
app.use(cors({
    origin:"*",
    withCredentials:true,
    allowedHeaders:["Content-Type","Authorization"] ,
    methods:["GET","POST","PUT","DELETE"]
}));
app.use(urlencoded({extended:true}));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

connectDB();