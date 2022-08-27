import React, { createContext,useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import '../../Styles/cart.css';
// import {products} from './products';
import ContextCart from "./ContextCart";
import axios from 'axios'
// 

export const CartContext = createContext();

const Cart = () => {
    // const [item, setItem] = useState(products);
    // http://localhost:3000/food/getfood
    const [products,setProdcuts] = useState([])
    const getProducts = async()=>{

      const {data}= await  axios.get("https://msassignment8.herokuapp.com/food/getfood")
      setProdcuts(data)
    }
    useEffect(() =>{
    getProducts()
    },[])

    return (
        <>
            <CartContext.Provider value={products}>
                <ContextCart />
            </CartContext.Provider>
        </>
    );
};









export default withRouter(Cart);
