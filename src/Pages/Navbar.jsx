import { useState } from 'react';
import {Link} from 'react-router-dom';


export default function Navbar ({setDisplay,display}) {
    const [logConnexion , setLogConnexion] = useState(false);
    const [Register,setRegister] = useState (false);

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
              <Link to="/"> <img src="Groupe-1.png" alt=""/></Link>
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
            <div className={logConnexion ? "login--part--connexion show--login--part--connexion" : "login--part--connexion"}></div>
               <button id="btn--open--login" onClick={ShowLogCo} >Connexion</button>
            <div className={Register ? "register--part shows--register--part" : "register--part"}></div>
               <button id="btn--open--register" onClick={showRegister}>Inscription</button>
               
               <div className={display ? "sidebar show--sidebar" : "sidebar"}></div>
               <div className='icons'>
               <div className='icon--search'>
               <i class="fa-solid fa-magnifying-glass"></i>
               </div>
               <div className='icon--menu' onClick={afficher}>
               <i class="fa-solid fa-bars"></i>
               </div>
               </div>
           </div>
           
       </div>
       
       
   </header>
   <nav>
       <li><Link className='liste' to="/articles">Categories</Link></li>
       <li><Link className='liste' to="/articles">Vetements</Link></li>
       <li><Link className='liste' to="/accessoires">Accessoires</Link></li>
       <li><Link className='liste' to="/articles">Chaussures</Link></li>
   </nav>
   </div>
    )
}