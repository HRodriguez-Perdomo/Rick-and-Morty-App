import { ADD_FAVOURITE, FILTER, ORDER, DELETE_FAVOURITES } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters:[]
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_FAVOURITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }

        case DELETE_FAVOURITES:
            return {
                ...state,
                myFavorites: action.payload
            }

            case FILTER:
                const allCharactersFiltered = state.allCharacters.filter((character) => character.gender === action.payload)
                return{
                    ...state,
                    myFavorites: allCharactersFiltered
                }

           case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return{
                ...state,
                myFavorites: action.payload === 'A'
                ? allCharactersCopy.sort((a,b)=> a.id - b.id)
                : allCharactersCopy.sort((a,b)=> b.id - a.id)
            }     

        default:
            return {...state}
    }
}

export default reducer  