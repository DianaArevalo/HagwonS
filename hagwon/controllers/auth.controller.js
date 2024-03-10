import Register from "../models/register.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
//4 json web token
import jwt from 'jsonwebtoken'

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

    const newRegister = new Register({
        username,
        lastname,
        email,
        userage,
        password: hashedPassword,
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

        const token = jwt.sign(
            //encrypted value 5 y 6
            { id: validUser._id },
            process.env.JWT_SECRET)

        //7

        const { password: pass, ...rest } = validUser._doc

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest)

    } catch (error) {
        next(error)
    }
}