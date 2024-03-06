import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import registerRoutes from './routes/register.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('MongoDb is connected')
    }
).catch((err) => {
    console.log(err);
})

const app = express()

app.listen(3000, () => {
    console.log("server runing on port 3000!");
})


app.use('/api/register', registerRoutes)
