import React, { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {AddArticle, DeleteArticle } from "../Redux/actions"

export function ProductCart () {

  const carts = useSelector(state => state.cartReducer.carts)
  const dispatch = useDispatch()


  const [cartShop , setCartShop] = useState(false);
  
  const showCart = ()=>{
    setCartShop(true);
  }
  const closeCart = ()=>{
    setCartShop(false)
  }

  const removeArticle = (id) =>{
    dispatch(DeleteArticle(id))
  }
 

  return (
    <div>
         <div className="aside">
                <div >
                    <div className="cart--icon" onClick={showCart}>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <div className="counter">0</div>
                    </div>
                    <div className={cartShop ? "cart--container OpenCart" : "cart--container"}>
                        {/* <h3>Your cart is empty</h3> */}
                        <div className="cart--container--block">
                            <div className="cart--container--header">
                                <div className="cart--description">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <p className="numbers--articles">1 articles</p>
                                </div>
                                <div className="btn--close" onClick={closeCart}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                        
                            <div className="cart--container--content">
                             {carts.map((cart)=> <div key={cart.id} className="cart--articles">
                                    <div className="button-block">
                                        <div className="handle--quantity">
                                        <div className="minus"><h5>-</h5></div>
                                        <div className="qty"><h5>1</h5></div>
                                        <div className="plus"><h5>+</h5></div>
                                        </div>
                                    </div>
                        
                                    <div className="cart--articles--descriptions">
                                        <div className="block--articles">
                                            <div className="articles">
                                                {/* <img src={`${process.env.REACT_APP_DOMAIN}jupe.png`} alt=""/> */}
                                                <img src={cart.image} alt="" />

                                            </div>
                        
                                            <div className="articles--details">
                                                <p className="names--articles">{cart.title}</p>
                                                <p className="price--articles"> {cart.price} F</p>
                                                <p className="quantity">3 unités</p>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <div className="btn--remove--article" onClick={removeArticle}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                             )}
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
    </div>
  )
}
