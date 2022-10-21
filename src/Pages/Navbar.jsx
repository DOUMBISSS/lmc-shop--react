import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getCategory, getCategoryArticles } from '../Redux/actions';


export default function Navbar ({setDisplay,setLogConnexion,setRegister}) {
    const categories = useSelector(state => state.categoryReducer.categories);

    let slug = useParams().slug;

    const dispatch = useDispatch("")

    useEffect(() => {  
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categories => {
            dispatch(getCategory(categories))
            })
        }, []);

    useEffect(() =>{

        fetch(`https://fakestoreapi.com/products/category/${slug}`)
        .then(res => res.json())
        .then(categoryArticles => { 
            dispatch(getCategoryArticles(categoryArticles))
            })

    },[slug])

            

    const afficher = () =>{
        setDisplay(true)
    }
    const ShowLogCo = () => {
        setLogConnexion (true)
    }

    const showRegister = ()=>{
        setRegister (true)
    }

    return(
        <div>
        <header>
       <div className="navbar">
           <div className="header--left">
               <input type="text" name="" id="search" placeholder="Rechercher un produit..."/>
           </div>
   
           <div className="header--logo">
              <Link to="/"> <img src={`${process.env.REACT_APP_DOMAIN}Groupe-1.png`}alt=""/></Link>
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
               <div className='icon--search'>
               <i className="fa-solid fa-magnifying-glass"></i>
               </div>
               <div className='icon--menu' onClick={afficher}>
               <i className="fa-solid fa-bars"></i>
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