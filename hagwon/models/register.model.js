import mongoose from 'mongoose'

const registerSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    userage: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true
    }

    // createdAt, updatedAt
}, { timestamps: true }

)

const Register = mongoose.model('Register', registerSchema)

export default Register