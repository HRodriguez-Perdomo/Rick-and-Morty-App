import { useState } from "react"
import validation from "../Validation/Validiation"
import style from "./form.module.css"

function Form ({logIn}){
    const[isSignIn, setIsSignIn] =useState(true)
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        logIn(userData)
    }
    return(
        <div className={`${style.wrapper} ${isSignIn ? style.active: ''}`} >
            <div className={`${style.formWrapper} ${style['sign-in']}`}>
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className={style.inputGroup}>
                        <input type="email" required name="email" onChange={handleChange} value={userData.email} />
                        {errors.email && <p>{errors.email}</p>}
                        <label htmlFor="email">Username</label>
                    </div>
                    <div className={style.inputGroup}>
                        <input type="password" required name="password" value={userData.password} onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={style.remember}>
                        <label><input type="checkbox"/> Remember me</label>
                    </div>
                    <button type="submit">Sign in</button>
                    <div className={style.signUp}>
                        <p>Don't have an account?<a href="#" className={style.SignUpBtn} onClick={()=>setIsSignIn(false)}>Sing Up</a></p>
                    </div>
                    <div className={style.socialPlatforms}>
                        <p>Or sign in with</p>
                        <div className={style.socialIcons}>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </form>
            </div> 

            <div className={`${style.formWrapper} ${style['sign-up']}`}>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className={style.inputGroup}>
                        <input type="text" required/>
                        <label htmlFor="email">Username</label>
                    </div>
                    <div className={style.inputGroup}>
                        <input type="email" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={style.inputGroup}>
                        <input type="password" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={style.remember}>
                        <label><input type="checkbox"/> I agree with the terms and conditions</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className={style.signUp}>
                        <p>Already have an account?<a href="#" className={style.SignInBtn} onClick={()=>setIsSignIn(true)}>Sing In</a></p>
                    </div>
                   
                </form>
            </div>
        </div>

    )
    
}

export default Form










// const signUpBtnLink =document.querySelector('.SignUpBtn')
// const signInBtnLink =document.querySelector('.SignInBtn')
// const wrapper =document.querySelector('.wrapper')
// signUpBtnLink.addEventListener('click' ()=>{wrapper.classList.toggle('active')})   
// signInBtnLink.addEventListener('click' ()=>{wrapper.classList.toggle('active')})   