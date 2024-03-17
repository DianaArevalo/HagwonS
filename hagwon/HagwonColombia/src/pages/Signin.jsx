
import { useEffect } from "react";
import { useContext } from 'react'
import { CartContext } from "../context/cartContext";

const Signin = () => {

    const { getProfile, username } = useContext(CartContext)

    useEffect(() => {
        const userId = '65ea8b94ebf7aabd18edb934'
        getProfile(userId)
    }, [getProfile])


    return (
        <section>
            <div>
                {getProfile ? (<div>
                    {/* imagen del avatar  */}
                    <img src="" alt="" />
                    <h1>{username}</h1>
                </div>) : (<h1>
                    No existe el usuario
                </h1>)}
            </div>
        </section>
    );
}

export default Signin;
