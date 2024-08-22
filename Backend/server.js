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

app.use(cors({
    origin: 'https://checkout-form-tjc8-pdga96eo4.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
  })); 

app.use("/api/users",router);

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("server started")
})