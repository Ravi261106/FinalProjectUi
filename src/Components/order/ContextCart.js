import React, {useContext} from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import {CartContext} from "./Cart";



const ContextCart = () => {
    // const [item, setItem]= useState(products);
    const item = useContext(CartContext);
    console.log(item);
    return (
        <>
         <header>
                <div className="continue-shopping">
                    <img src="./Images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Select your meal</h3>
                </div>
                {/* <div className='cart-icon'>
                    <img src="./Images/cart.png" alt="cart" />
                    <p>7</p>
                </div> */}
            </header>

            <section className="main-cart-section">
                <h1>MENU</h1>
                {/* <p className="total-items">You have <span className="total-item-count">7</span> items in your cart</p> */}
                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                        {
                            item.map((curItem)=>{
                               return <Items key = {curItem.id} products={curItem} {...curItem} />
                            })
                        }

                        

  
                           
                        </Scrollbars>
                    </div>
                </div>

                {/* <div className="card-total">
                    <h3>Cart Total : <span>Sab free hai</span></h3>
                    <button>Checkout</button>

                </div> */}
            </section>

        </>
    )
};

export default ContextCart;
