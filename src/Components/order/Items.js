import React from "react";
import CheckOut from "../checkOut/CheckOut";

const Items = ({products}) => {
    // console.log(products)
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={products.image} alt="" />
                </div>
                <div className="title">
                    <h2>{products.name}</h2>
                    <p>{products.cuisine}</p>
                </div>
                {/* <div className="add-minus-quantity">
                    <i className="fas fa-minus minus"></i>
                    <input type="text" placeholder="2" />
                    <i className="fas fa-plus add"></i>
                </div> */}

                <div className="price">
                    <h3>{products.price}</h3>
                </div>

              
                    <CheckOut price={products.price} cartItems={products}/>

               
            </div>
            <hr />
        </>
    );
};

export default Items;
