import { useDispatch, useSelector } from 'react-redux';
import Footer from "./Footer";
import { getHomeArticle } from '../Redux/actions';
import Navbar from "./Navbar";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProductCart } from './ProductCart';


export default function Home (){

    const homeArticles = useSelector(state => state.homeArticleReducer.homeArticles);
    const categories = useSelector(state => state.categoryReducer.categories);
    const dispatch = useDispatch("");


    const [display ,setDisplay] = useState(false);
    const [filter,setFilter] = useState(false);
    const [logConnexion , setLogConnexion] = useState(false);
    const [Register,setRegister] = useState (false);
    const [searchBar,setSearchBar] = useState(false);

    const affi = ()=> {
        setDisplay (false)
    }
    const closeFilter = ()=> {
        setFilter (false)
    }
    const showFilter =()=>{
        setFilter (true)
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

     // 'https://api.escuelajs.co/api/v1/products'
         
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
    .then(res => res.json())
    .then(homeArticles => {dispatch(getHomeArticle(homeArticles))
    })}, []);

    return (
        <div>
            <Navbar display={display} setDisplay={setDisplay} setLogConnexion={setLogConnexion} setRegister={setRegister} setSearchBar={setSearchBar}/>
            <div className="main--part">
                <div className="box">
                    <h1>Beneficiez de vos articles preferes en gros et en details</h1>

                    <p>Achetez et faite vous livrer vos colis en Cote d'Ivoire , au Burkina Faso , au Liberia et en Sierra Leone</p>

                    <button className="buy">Achetez maintenant</button>
                </div>
            </div>
            <div className="categories">
                <div className="rows">
                        <div className="cols">
                            <p>Hommes</p>
                            {/* <a href="Articles.html"></a><p id="mores">voir plus </p></a>  */}
                                <img src={`${process.env.REACT_APP_DOMAIN}xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp`} alt=""/>      
                        </div>

                        <div className="cols">
                            <p>Femmes</p>
                             {/* <a href="Articles.html"><p id="mores">voir plus </p></a>  */}
                            <img src={`${process.env.REACT_APP_DOMAIN}xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp`} alt=""/>
                        </div>

                        <div className="cols">
                            <p>Accessoires</p>
                            {/* <!-- <a href="Articles.html"><p id="mores">voir plus </p></a> */}
                            <img src={`${process.env.REACT_APP_DOMAIN}xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp`} alt=""/>
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

            <ProductCart/>


            <div className="container">
                <div className="left--part">
                    <h4>Nouvel arrivage</h4>
                    <h4 className="onglet">Top ventes</h4>
                </div>

                <div className="right--part">
                    <div className="filter"onClick={showFilter}>
                        <i className="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Filtre</p>
                    </div>
                <div className={filter ? "filterbar show--filterbar" : "filterbar"}>
                        <div className='filterbar--content'>
                        <div className='btn--close--sidebar'onClick={closeFilter}> <i className="fa-solid fa-xmark"></i></div>
                            <h4>Nouvel arrivage</h4>
                            <h4>Top ventes</h4>
                        </div>
                </div>
                    

            <div className="right--part--content">
            {homeArticles.map((homeArticle) => <div key={homeArticle.id} className="card">
                    <div className="card--product">
                        <a href="article-details.html">
                        <div className="card--product--image">
                            <div className="card--product--image--box">
                          <Link to={`/details/${homeArticle.id}`}>  <img src={homeArticle.image} alt=""/></Link>
                            </div>
                        </div>
                    </a>
                        <div className="card--product--content">
                            <div className="name--product">
                                <p>{homeArticle.title}</p>
                            </div>

                            <div className="descrption--product">
                                <p className="prices"> {homeArticle.price} F CFA<span> / unite</span></p>
                                <p className="prices"> {homeArticle.price} F CFA<span> / a partir de 5 unités</span></p>
                            </div>
                            <div className="button--block">
                                <button className="btn--buy"><Link to={`/details/${homeArticle.id}`}>ACHETER</Link></button>
                                <button className="btn--add">+</button>
                            </div>
                            
                        </div>

                    </div>


                </div>
            )};
               
            </div>
            <div className="more">
                <button>Voir plus</button>
            </div>

            </div>

            </div>
            <Footer/>
        </div>
    );
}