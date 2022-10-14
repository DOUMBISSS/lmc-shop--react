import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryArticles } from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function Articles (){
    const categoryArticles = useSelector (state => state.categoryReducer.categoryArticles);
    const dispatch = useDispatch("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(categoryArticle => {dispatch(getCategoryArticles(categoryArticle))
        })}, []);

    return (
        <div>
            <Navbar/>
            <div className="box--container">
            <div className="first--part">
                 <div className="first--part--blur">
                 <p>Vêtements</p>
                </div>
            </div>

            <div className="second--part">
                <div className="second--part--content">
                {categoryArticles.map((categoryArticle) => <div key={categoryArticle.id} className="card">
                    <div className="card--product">
                        <a href="article-details.html">
                        <div className="card--product--image">
                            <div className="card--product--image--box">
                            <img src={categoryArticle.image} alt=""/>
                            </div>
                        </div>
                    </a>
                        <div className="card--product--content">
                            <div className="name--product">
                                <p>{categoryArticle.title}</p>
                            </div>

                            <div className="descrption--product">
                                <p className="prices"> {categoryArticle.price} F CFA<span> / unite</span></p>
                                <p className="prices"> {categoryArticle.price} F CFA<span> / a partir de 5 unités</span></p>
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
            </div>
                <div className="more">
                    <button>Voir plus</button>
                </div>
            </div>
            <Footer/>
        </div>
    )

}