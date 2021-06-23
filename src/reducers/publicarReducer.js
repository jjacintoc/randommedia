import {ACTION_TYPES} from "../actions/publicarActions"

const initialState = {
    list:[]
}

export const publicar = (state=initialState,action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state;
    }
}