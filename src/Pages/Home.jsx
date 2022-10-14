import { useDispatch, useSelector } from 'react-redux';
import Footer from "./Footer";
import { getHomeArticle } from '../Redux/actions';
import Navbar from "./Navbar";
import { useEffect } from 'react';



export default function Home (){

    const homeArticles = useSelector(state => state.homeArticleReducer.homeArticles);
    const dispatch = useDispatch("");


     // 'https://api.escuelajs.co/api/v1/products'
         
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
    .then(res => res.json())
    .then(homeArticles => {dispatch(getHomeArticle(homeArticles))
    })}, []);

    return (
        <div>
            <Navbar/>
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
                                <img src="xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp" alt=""/>      
                        </div>

                        <div className="cols">
                            <p>Femmes</p>
                             {/* <a href="Articles.html"><p id="mores">voir plus </p></a>  */}
                            <img src="xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp " alt=""/>
                        </div>

                        <div className="cols">
                            <p>Accessoires</p>
                            {/* <!-- <a href="Articles.html"><p id="mores">voir plus </p></a> */}
                            <img src="xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp " alt=""/>
                        </div>
                        
                </div>
            </div>
            <div className="container">
                <div className="left--part">
                    <h4>Nouvel arrivage</h4>
                    <h4 className="onglet">Top ventes</h4>
                </div>

                <div className="right--part">
                    <div className="filter">
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Filtre</p>
                    </div>
            <div className="right--part--content">
            {homeArticles.map((homeArticle) => <div key={homeArticle.id} className="card">
                    <div className="card--product">
                        <a href="article-details.html">
                        <div className="card--product--image">
                            <div className="card--product--image--box">
                            <img src={homeArticle.image} alt=""/>
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
                                <button className="btn--buy"><a href="article-details.html">Achetez</a></button>
                                <button className="btn--add">+</button>
                            </div>
                            
                        </div>

                    </div>


                </div>
            )};
               
            </div>
            <div class="more">
                <button>Voir plus</button>
            </div>

            </div>

            </div>
            <Footer/>
        </div>
    );
}