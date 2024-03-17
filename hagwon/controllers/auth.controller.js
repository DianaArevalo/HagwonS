import Register from "../models/register.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
//4 json web token
// import jwt from 'jsonwebtoken'
// import { verifyToken } from "../utils/verifyUser.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"



export const signup = async (req, res, next) => {
    const { username, lastname, email, userage, password } = req.body

    if (!username ||
        !lastname ||
        !email ||
        !userage ||
        !password ||
        username === '' ||
        lastname === '' ||
        email === '' ||
        userage === '' ||
        password === ''
    ) {
        next(errorHandler(400, 'All fields are required'))
    }

    const hashedPassword = bcryptjs.hashSync(password, 15)

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=`;


    const newRegister = new Register({
        username,
        lastname,
        email,
        userage,
        password: hashedPassword,
        profilePic: boyProfilePic,
    });

    try {

        await newRegister.save()
        res.json('signup succesful')

    } catch (error) {
        next(error)
    }
}

//2

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    try {
        const validUser = await Register.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        //3
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'))
        }

        //generate token

        generateTokenAndSetCookie(validUser._id, res);

        res.status(200).json({
            _id: validUser._id,
            username: validUser.username,
            lastname: validUser.lastname,
            emai: validUser.email,
            profilePic: validUser.profilePic,
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        next(error)
    }
}


export const logout = (req, res, next) => {

    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "logged out successfully" })

    } catch (error) {
        console.log("Error in logout controller", error.message);
        next(error)
    }
}
