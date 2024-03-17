import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import registerRoutes from './routes/register.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('MongoDb is connected')
    }
).catch((err) => {
    console.log(err);
})

const app = express()

app.use(express.json())

// Usa cookie-parser como middleware
app.use(cookieParser());

// CORS

app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza con el origen de tu cliente React
    credentials: true // Permite el envío de cookies de origen cruzado
}))

app.listen(3000, () => {
    console.log("server runing on port 3000!");
})


app.use('/api/register', registerRoutes)
app.use('/api/auth', authRoutes)

//22
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server Error'
    res.status(statusCode).json({
        succes: false,
        statusCode,
        message,

    })
})