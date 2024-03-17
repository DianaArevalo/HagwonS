import React, { useState, createContext, useReducer } from 'react'
import CardReducer from "../context/cartReducer"
import axios from 'axios'


export const CartContext = createContext();



const CartProvider = ({ children }) => {

    const initialState = {
        username: [],
        _id: null
    }

    const [isOpen, setIsOpen] = useState(false);

    const [state, dispatch] = useReducer(CardReducer, initialState)

    const getProfile = async (_id) => {
        try {
            const res = await axios.get(`/api/auth/profile`);
            console.log(res);

            const { data } = res.data; // Extraer la propiedad 'data' de la respuesta


            dispatch({

                type: 'GET_PROFILE',
                payload: res.data.data
            });
        } catch (error) {
            console.error('Error fetching profile:', error);
        }

    }



    return (
        <CartContext.Provider value={{
            isOpen,
            setIsOpen,
            username: state.username,
            _id: state._id,
            getProfile
        }}>
            {children}
        </CartContext.Provider>

    )
}





export default CartProvider