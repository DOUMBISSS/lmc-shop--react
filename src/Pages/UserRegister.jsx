import {useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {getUser } from "../Redux/actions";




export default function UserRegister ({Register,setRegister}){
    const user = useSelector(state =>state.userReducer.user);
    const dispatch = useDispatch();

    const closeRegister = ()=>{
        setRegister(false)
    }

    const [inputs , setInputs]=useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        alert(`The name you entered was: ${inputs}`)
    }

    
    const handleChange =(event)=>{
        const email = event.target.email;
        const value = event.target.value;
        setInputs(values => ({...values, [email]: value}))
        
    }
  

    return (
        <div className={Register ? "register--part shows--register--part" : "register--part"}>
        <div className="login--part--container">
            <div className="login--part--container--header">
                <p className="name--log">Inscription</p>
                <div className="btn--close--register" onClick={closeRegister}>
                <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="login--part--container--content">
                <p>Vous n'avez pas de compte ? <span className="new">Connectez-vous</span></p> 

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
                    <input type="text" name="firstname" placeholder="Nom" />
                    <input type="text" name="lastname" id="" placeholder="Prenom"/>
                    <input type="email" name="email" id="email" placeholder="Adresse email" value={user.email} onChange={handleChange}/>
                    <input type="password" name="" id="password" placeholder="Mot de passe" value={user.password} onChange={handleChange}/>
                    <input type="numero" name="numéro" placeholder="N° Tel :"  value={user.phone}/>
                    <select name="" id="adresse"><option value="">Pays</option></select>
                    <select name="" id="adresse"><option value="">Ville</option></select>
                <button id="btn--connexion"onClick={handleSubmit}>S'inscrire</button>
                </div>
            </div>

        </div>
    </div>
    )
}