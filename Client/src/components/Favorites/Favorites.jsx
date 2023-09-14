import { useSelector } from "react-redux/es/hooks/useSelector"
import { Link } from "react-router-dom"
import { filterCards, orderCards } from "../../redux/actions"
import {useDispatch} from 'react-redux'

function Favorites(){
    const dispatch = useDispatch();

    const handleOrder =(event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter= (event)=>{
        dispatch(filterCards(event.target.value))
    }

    const myFavorites = useSelector(state=> state.myFavorites)
    return(
        <>
        <select onChange={handleOrder}>
            <option value="A">Upward</option>
            <option value="D">Downward</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
            {myFavorites.map(character=>{
               return(
                <div key={character.id}>
                <Link >
                <h2>{character.name}</h2>
                </Link>
                <h2>{character.status}</h2>
                <h2>ID: {character.id}</h2>
                <img src={character.image} alt='name' />
                
             </div>
               )
            })}
        </>
    )
}

export default Favorites