import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/home/home';
import Details from './Components/details/details';
import Filter from './Components/filter/Filter';
import Header from './Components/header/Header';
import Cart from './Components/order/Cart';


function Router() {
    return (
        <BrowserRouter>
            
            <Route exact path="/" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/filter" component={Filter}></Route>            
            <Route path="/header" component={Header}></Route> 
            <Route path="/cart" component={Cart}></Route> 

        </BrowserRouter>
    )
}

export default Router;