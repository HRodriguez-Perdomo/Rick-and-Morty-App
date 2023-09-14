import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

// ? importing css class
import style from './Detail.module.css'

function Detail (){
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({data})=>{
            if(data.name){
                setCharacter(data)
            } else {
                window.alert("No hay personajes con ese ID")
            }
        })
        return setCharacter({})
    }, [id])
    return(
        <div className={style.mainDetailContainer}>
            <div className={style.mainImageContainer}><img alt={character.name} src={character.image}/></div>
            <div className={style.textContainer}>
            <h2><span>ID:</span> {character.id}</h2>
            <h2><span>NAME:</span> {character.name}</h2>
            <h2><span>ORIGIN:</span> {character.origin?.name}</h2>
            <h2><span>GENDER:</span> {character.gender}</h2>
            <h2><span>SPECIE:</span> {character.species}</h2>
            <h2><span>LOCATION:</span> {character.location?.name}</h2>
            </div>
        </div>
    )
}

export default Detail