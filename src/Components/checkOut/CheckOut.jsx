import React,{useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import {Button} from 'react-bootstrap';
import axios from 'axios';


const CheckOut = ({price, cartItems}) => {
     
    const [order,setOrder] = useState([])
    const placeOrder = async(token)=>{
   const currentUser = localStorage.getItem('user');
   console.log(currentUser)
      const data=  await axios.post("https://msassignment8.herokuapp.com/order/placeorder", {
            token,
            price,
            currentUser,
            cartItems,
          });
        if(data.status==200){
            alert("Your Order Successfully Placed")
        }else{
            alert("Something went wrong")
        }
      setOrder(data)
    }
    
    const tokenHandler = (token) =>{
        console.log(price)
    }; 


 
    return (
        <StripeCheckout
        amount={price*100}
        shippingAddress
        token={placeOrder}
        stripeKey="pk_test_51HvfktAxBrXJs2UIVhIC9DKXWhTmPmGSoZblhwCwF7Qt9owus1UCB9D7UblFcutQNrhCsaIoIR9aQQCXVdVQhBdv00DgUIGCHZ"
        currency="INR"
        
        >
            <Button>Order Now</Button>
        </StripeCheckout>
    )
};

export default CheckOut;

