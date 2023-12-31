import { ADD_FAVOURITE, DELETE_FAVOURITES, FILTER, ORDER } from "./action-types";
import axios from 'axios'

export const addFavourite = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav'

   try {
      return async (dispatch)=>{
         const response = await axios.post(endpoint, character)
         const {data} = response
         return dispatch({
            type: ADD_FAVOURITE,
            payload: data
         })
      }
   }catch(error){
      console.log(error)
   }

};

export const deleteFavourite = (id) => {
try {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
   return async (dispatch)=>{
   const response = await axios.delete(endpoint)
   const {data} = response
   return dispatch({
      type: DELETE_FAVOURITES,
      payload: data
   })
}
} catch (error) {
   console.log(error) 
}
};

export const filterCards = (gender)=>{
   return {type: FILTER, payload: gender}
}

export const orderCards= (order)=>{
   return {type: ORDER, payload: order }
}