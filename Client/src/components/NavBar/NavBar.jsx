import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"

function Nav({onSearch, random }){
   return (
    <>
         <SearchBar onSearch={onSearch}/>
         <Link to={'/'}>
            <button>Log out</button>
         </Link>

         <Link to={'/home'}>
            <button>Home</button>
         </Link>
         
         <Link to={'/about'}>
            <button>About</button>
         </Link>

         <Link to={'/favorites'}>
            <button>Favorites</button>
         </Link>
         <button onClick={random}>Add random</button>
    </>
   )
}

export default Nav