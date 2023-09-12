import { ADD_FAVOURITE, DELETE_FAVOURITES } from "./action-types";
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
// export const addFavourite = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav'
//    try {
//       return async (dispatch)=>{
//          const response = await axios.post(endpoint, character)
//          const {data} = response
//          return dispatch({
//             type: ADD_FAVOURITE,
//             payload: data
//          })
//       }
//    } catch (error) {
//       console.log(error)
//    }
// }
// 
// // export const addFavourite = (character) => {
// //    const endpoint = 'http://localhost:3001/rickandmorty/fav';
// //    return async (dispatch) => {
// //      try {
// //        const { data } = await axios.post(endpoint, character);
// //        
// //        if(!data.length) throw Error("no hay favorito")
// //        
// //       return dispatch({
// //          type: ADD_FAVOURITE,
// //          payload: data,
// //        });
// //      } catch (error) {
// //        // Manejar errores si es necesario
// //        console.error(error.message);
// //      }
// //    };
// //  };
// // export const addFavourite = (character) => {
// //     const endpoint = 'http://localhost:3001/rickandmorty/fav';
// //     return (dispatch) => {
// //        axios.post(endpoint, character).then(({ data }) => {
// //           return dispatch({
// //              type: ADD_FAVOURITE,
// //              payload: data,
// //           });
// //        });
// //     };
// //  };
// 
// 
// export const deleteFavourite = (id) => {
//    try {
//       const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id
//       return async (dispatch)=>{
//       const response = await axios.delete(endpoint)
//       const {data} = response
//       return dispatch({
//          type: DELETE_FAVOURITES,
//          payload: data
//       })
//    }
//    } catch (error) {
//       console.log(error)
//    }
// 
// 
// 
// 
// 
// 
// 
// // export const deleteFavourite =(id) =>{
// //    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
// //    return async (dispatch) =>{
// //       try{
// //          const {data}= await axios.delete(endpoint)
// // 
// //          if(!data.length) throw Error("no hay favorito")
// //          
// //          return dispatch({
// //             type: DELETE_FAVOURITES,
// //             payload: data,
// //          }) 
// //       }catch(error){
// //          console.log(error.message)
// //       }
// //    }
// }
// //  export const deleteFavourite = (id) => {
// //     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
// //     return (dispatch) => {
// //        axios.delete(endpoint).then(({ data }) => {
// //           return dispatch({
// //              type: DELETE_FAVOURITES,
// //              payload: data,
// //        });
// //        });
// //     };
//  };



