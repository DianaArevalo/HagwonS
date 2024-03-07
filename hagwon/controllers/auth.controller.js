import Register from "../models/register.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    const { username, lastname, email, userage, password } = req.body

    if (!username || !lastname || !email || !userage || !password || username === '' || lastname === '' || email === '' || userage === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' })
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
        res.status(500).json({ message: error.message })
    }



}