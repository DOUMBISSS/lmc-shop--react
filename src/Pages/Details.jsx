import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {AddArticle, getArticle, getHomeArticle } from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ProductCart } from "./ProductCart";



export default function Details (){

    let id = useParams().id;
    
    const addToCart = (id) => {
        dispatch(AddArticle(id))
      }
  

    const article = useSelector(state => state.homeArticleReducer.article);
    const dispatch = useDispatch();

    const handleclick = () =>{
       alert('fghjh')
    }

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(article => {dispatch(getArticle(article))
        })  
    },[id]);

  
    return (
        <div>
            <Navbar/>
            <div className="main--articles">
            <div className="main--content">
            <div className="main--content--left">
                <div className="images--container">
                    <img src={article.image} alt=""/>
                </div>
                <div className="images--container--content">
                    <div className="images--thumbails">
                        <img key ={id} src={article.image} onClick={()=>handleclick(id)} alt=""/>
                    </div>
                </div>
        </div>
        <ProductCart/>
        <div className="main--content--right">
            <div className="main--content--right--block">
                <h2>{article.title}</h2>
            <p className="price--per--unit">{article.price} F / Unité</p>

            <p className="details--articles">{article.description}</p>
            <p className="rating">Rating {article.rating && article.rating.rate}
            <i className="fa fa-star"></i></p>

            <div className="block--button">
                <div className="btn--cart--add" onClick={() => addToCart(article)}>Ajouter au panier</div>
                <div className="btn--cart--buy"><Link to="/paiement">Achetez</Link></div>
            </div>
            </div>
        </div>

    </div>
        {/* <h3>Articles connexes</h3>
        <div className="second--part--content">
            <div className="card">
                <div className="card--product">
                    <a href="article-details.html">
                    <div className="card--product--image">
                        <div className="card--product--image--box">
                        <img src="" alt=""/>
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

        </div> */}
    </div>
            <Footer/>
        </div>
    )
}