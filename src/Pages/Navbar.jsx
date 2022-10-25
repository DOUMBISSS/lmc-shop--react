import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getCategory, getCategoryArticles } from '../Redux/actions';


export default function Navbar () {
    const categories = useSelector(state => state.categoryReducer.categories);
    const [display ,setDisplay] = useState(false);
    const [logConnexion , setLogConnexion] = useState(false);
    const [Register,setRegister] = useState (false);
    const [searchBar,setSearchBar] = useState(false);

    let slug = useParams().slug;

    const dispatch = useDispatch("")

    useEffect(() => {  
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categories => {dispatch(getCategory(categories))
        })}, []);

    useEffect(() =>{

        fetch(`https://fakestoreapi.com/products/category/${slug}`)
        .then(res => res.json())
        .then(categoryArticles => { 
            dispatch(getCategoryArticles(categoryArticles))
            })

    },[slug])

            

    const showMenu = () =>{
        setDisplay(true)
    }
    const ShowLogCo = () => {
        setLogConnexion (true)
    }

    const showRegister = ()=>{
        setRegister (true)
    }

    const showIcon = ()=>{
        setSearchBar(true)
    }
    const affi = ()=> {
        setDisplay (false)
    }
    
    const closeLogCO = ()=>{
        setLogConnexion (false)
    }

    const closeRegister = ()=>{
        setRegister(false)
    }

    const closeSearchBar = ()=>{
        setSearchBar(false)
    }

    return(
        <div>
        <header>
       <div className="navbar">
           <div className="header--left">
               <input type="text" name="" id="search" placeholder="Rechercher un produit..."/>
           </div>
   
           <div className="header--logo">
              <Link to="/"> <img src={`${process.env.REACT_APP_DOMAIN}Groupe-1.png`} alt=""/></Link>
           </div>
   
           <div className="header--right">

                   <select name="" id="Language">
                       <option value="">Francais</option>
                       <option value="">Anglais</option>
                       <option value="">Chinois</option>
                   </select>

                   <select name="" id="devise">
                       <option value="">XOF</option>
                       <option value="">USD</option>
                       <option value="">STD</option>
                   </select>
          
               <button id="btn--open--login" onClick={ShowLogCo} >Connexion</button>
               <button id="btn--open--register" onClick={showRegister}>Inscription</button>
               
               <div className='icons'>
               <div className='icon--search' onClick={showIcon}>
               <i className="fa-solid fa-magnifying-glass"></i>
               </div>
               <div className='icon--menu' onClick={showMenu}>
               <i className="fa-solid fa-bars"></i>
               </div>
               </div>


           </div>
           
       </div>
       
       <div className={display ? "sidebar show--sidebar" : "sidebar"}>
                    <div className='sidebar--menu'>
                        <div className='btn--close--sidebar' onClick={affi}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    {categories.map((categorie,i) => <p><li key={i} ><Link className='liste' to={`/category/${categorie}`}>{categorie}</Link></li></p>
                    ) }
                        </div>
        </div>

        <div className={searchBar ? "navbar--search openSearchBar" : "navbar--search"}>
                    <div className='navbar--search--block'>
                    <input type="text" name="" id="searchBar" placeholder="Rechercher un produit..."/>
                    <div className="btn--close--searchBar" onClick={closeSearchBar}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    </div>
                </div>

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
                            <input type="email" name="" id="email" placeholder="Adresse email"/>
                            <input type="password" name="" id="password" placeholder="Mot de passe"/>
                        <button id="btn--connexion">Se connecter</button>
                        </div>
                        <p className="password" >Mot de passe oublie </p>

                    </div>

                </div>
                
            </div> 


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
                            <input type="text" name="" placeholder="Nom"/>
                            <input type="text" name="" id="" placeholder="Prenom"/>
                            <input type="email" name="" id="email" placeholder="Adresse email"/>
                            <input type="password" name="" id="password" placeholder="Mot de passe"/>
                            <select name="" id="adresse"><option value="">Pays</option></select>
                            <select name="" id="adresse"><option value="">Ville</option></select>
                        <button id="btn--connexion">S'inscrire</button>
                        </div>
                    </div>

                </div>
            </div>
      
       
   </header>
   <nav>
  
       {categories.map((categorie,i) => <li key={i} ><Link className='liste' to={`/category/${categorie}`}>{categorie}</Link></li>) }
   </nav>
   </div>
    )
}