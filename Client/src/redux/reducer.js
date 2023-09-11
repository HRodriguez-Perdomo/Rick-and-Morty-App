import { ADD_FAVOURITE } from "./action-types"
import { DELETE_FAVOURITES } from "./action-types"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_FAVOURITE:
            return{
                ...state,
                myFavorites: "payload"
            }

        case DELETE_FAVOURITES:
            return {
                ...state,
                myFavorites: "payload"
            }


        default:
            return {...state}
    }
}

export default reducer