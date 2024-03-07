import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import registerRoutes from './routes/register.route.js'
import authRoutes from './routes/auth.route.js'

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

app.listen(3000, () => {
    console.log("server runing on port 3000!");
})


app.use('/api/register', registerRoutes)
app.use('/api/auth', authRoutes)