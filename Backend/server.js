import express from 'express'
import dotenv from "dotenv"
dotenv.config()
import router from './routes.js'
import { connectDB } from './db.js'
import cors from "cors";
connectDB();
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); 

app.use("/api/users",router);

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server started")
})