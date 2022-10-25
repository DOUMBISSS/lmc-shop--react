import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {getHomeArticle } from "../Redux/actions";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function Details (){

    let id = useParams().id;

    const homeArticles = useSelector(state => state.homeArticleReducer.homeArticles);
    const dispatch = useDispatch();



    const handleclick = () =>{
       alert('fghjh')
    }

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(homeArticles => {dispatch(getHomeArticle(homeArticles))
        })},[id]);
    
    return (
        <div>
            <Navbar/>
            <div className="main--articles">
            <div className="main--content">
            <div className="main--content--left">
                <div className="images--container">
                    <img src={homeArticles.image} alt=""/>
                </div>
                <div className="images--container--content">
                    <div className="images--thumbails">
                        <img key ={id} src={homeArticles.image} onClick={()=>handleclick(id)} alt=""/>
                    </div>
                </div>
        </div>

        <div className="main--content--right">
            <div className="main--content--right--block">
                <h2>{homeArticles.title}</h2>
            <p className="price--per--unit">{homeArticles.price} F / Unité</p>

            <p className="details--articles">{homeArticles.description}</p>

                {/* <p className="details--articles">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l
                    abore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <p className="sale"><i>Vente en gros à partir de 7 unités*</i></p> */}
            <div className="block--button">
                <div className="btn--cart--add">Ajouter au panier</div>
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