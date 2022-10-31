import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../Redux/actions"


export default function UserLogin ({setLogConnexion,logConnexion}){

    const closeLogCO = ()=>{
        setLogConnexion (false)
    }

    const [inputs , setInputs]=useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${inputs}`)
    }

    const handleChange =(event)=>{
        const username = event.target.username;
        const value = event.target.value;
        setInputs(values => ({...values, [username]: value}))
        
    }

    const user = useSelector(state =>state.userReducer.user)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         body:JSON.stringify({
    //             username: "mor_2314",
    //             password: "83r5^_"
    //         })
    //     })
    //         .then(res=>res.json())
    //         .then(user=>{dispatch(getUser(user))})
    // })

    // console.log(users)

    return (
        <div className={logConnexion ? "login--part--connexion show--login--part--connexion" : "login--part--connexion"}>
        <div className="login--part--container">
            <div className="login--part--container--header">
                <p className="name--log">Connexion</p>
                <div className="btn--close--login" onClick={closeLogCO}>
                    <i className="fa-solid fa-xmark"></i>
                    </div>
            </div>
            <div className="login--part--container--content">
                <p>Vous n'avez pas de compte ? <span className="new">Inscrivez-vous</span></p> 

                <div className="type--of--connexion">
                    <div className="google">
                        <p>Connexion avec google</p>
                    </div>
                    <div className="facebook">
                        <p>Connexion avec facebook</p>
                    </div>
                </div>
                <p>ou</p>

                <div className="block---connexion">
                    <input type="email" name="username" id="email" placeholder="Adresse email" value={user.username} onChange={handleChange}/>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" value={user.password} onChange={handleChange}/>
                <button id="btn--connexion" onClick={handleSubmit}>Se connecter</button>
                </div>
                <p className="password" >Mot de passe oublié </p>

            </div>

        </div>
        
    </div> 
    )
}