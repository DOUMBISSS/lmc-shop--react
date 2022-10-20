import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryArticles } from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function ArticleCategory(){
    const slug = useParams().slug;
    const categoryArticles = useSelector (state => state.categoryReducer.categoryArticles);
    


    return (
        <div>
            <Navbar/>
            <div className="box--container">
            <div className="first--part">
                 <div className="first--part--blur">
                 <p>{slug}</p>
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
                                <p className="prices"> {categoryArticle.price}<span> / unite</span></p>
                                <p className="prices"> {categoryArticle.price}<span> / a partir de 5 unités</span></p>
                            </div>
                            <div className="button--block">
                                <button className="btn--buy"><a href="article-details.html">Achetez</a></button>
                                <button className="btn--add">+</button>
                            </div>
                            
                        </div>

                    </div>


                </div>
            )}
                    

                    {/* <div  className="card">
                    <div className="card--product">
                        <a href="article-details.html">
                        <div className="card--product--image">
                            <div className="card--product--image--box">
                            <img src={`${process.env.REACT_APP_DOMAIN}jupe.png`} alt=""/>
                            </div>
                        </div>
                    </a>
                        <div className="card--product--content">
                            <div className="name--product">
                                <p>Jupe volante</p>
                            </div>

                            <div className="descrption--product">
                                <p className="prices"> 1500 F CFA<span> / unite</span></p>
                                <p className="prices"> 1500 F CFA<span> / a partir de 5 unités</span></p>
                            </div>
                            <div className="button--block">
                                <button className="btn--buy"><a href="article-details.html">Achetez</a></button>
                                <button className="btn--add">+</button>
                            </div>
                            
                        </div>

                    </div>


                </div> */}
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

