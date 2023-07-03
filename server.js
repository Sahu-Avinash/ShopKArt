import express  from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors";
import categortRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"


dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// routes

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category', categortRoutes)
app.use('/api/v1/product',productRoutes)


app.get("/",(req,res)=>
{
   res.send({
      message:"welcome to shopkart app"
   })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>
{
    console.log(`Server Running on ${PORT} on ${process.env.DEV_MODE}`)
})