import { GET_PROFILE } from "./types";

export default function (state, action) {
    const { payload, type } = action;


    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                _id: payload,


            }

        default:
            return state;
    }
}