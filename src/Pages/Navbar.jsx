import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { getCategory, getCategoryArticles } from '../Redux/actions';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';


export default function Navbar () {
    const categories = useSelector(state => state.categoryReducer.categories);
    const [display ,setDisplay] = useState(false);
    const [Register,setRegister] = useState (false);
    const [searchBar,setSearchBar] = useState(false);
    const [logConnexion , setLogConnexion]=useState(false);

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
              <Link to="/"> <img src={`${process.env.PUBLIC_URL}/Groupe-1.png`} alt=""/></Link>
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

           <UserLogin logConnexion={logConnexion} setLogConnexion={setLogConnexion}/>
           <UserRegister Register={Register} setRegister={setRegister}/>
      
       
   </header>
   <nav>
  
       {categories.map((categorie,i) => <li key={i} ><Link className='liste' to={`/category/${categorie}`}>{categorie}</Link></li>) }
   </nav>
   </div>
    )
}