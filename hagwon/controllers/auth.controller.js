import Register from "../models/register.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"

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