//! depnedencies
import axios from 'axios';

// components
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

//? Hooks
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
   const [access, setAcces] = useState(false)
   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate()

async function onSearch(id){
   try{
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const{data} = response
      if(data.name){
         setCharacters((oldChars) => [...oldChars, data]);
      } else{
         window.alert('¡No hay personajes con este ID!');
      }
   }catch(error){
      window.alert("id not found")
   }
}
   // function onSearch(id) {
   //    axios(`http://localhost:3001/rickandmorty/character/${id}`)
   //    .then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   const onClose = (id)=>{
      const updatedCharacters = characters.filter(character=> character.id !== id)
      setCharacters(updatedCharacters)
   }

   async function login (userData){
      try{
         const {email, password} = userData
         const URL ='http://localhost:3001/rickandmorty/login/';
         const response =  await axios(URL + `?email=${email}&password=${password}`)
         const {data} = response 
         const {access} = data;
         setAcces(data);
         access && navigate('/home');
     }catch(error){
         console.log(" hola")
      }
   }


   // const login =(userData)=> {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAcces(data);
   //       access && navigate('/home');
   //    });
   // }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
        
         {
         location.pathname !== "/" 
         ?  <Nav onSearch={onSearch}/> 
         : null
         }
        
         <Routes>
            <Route path='/' element={<Form logIn={login}/>}/>
           
            <Route path='/home' 
            element={<Cards characters={characters} onClose={onClose}/>}/>
           
            <Route path='/About' element={<About/>}/>
           
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
