import React from 'react'
import { Route } from 'react-router-dom'
import FriendListApp from './FriendListApp';
import CartContainer from './CartContainer';
import ShoppingCart from "./ShoppingCart";
import Header from '../components/Header'
import SwiperPage from "./SwiperPage";
import './style.css'

const Root = () => (
        <div>
            <Header/>
            <Route exact path="/cart" component={ShoppingCart}/>
            <Route strict path="/user/:page" component={SwiperPage}/>
            <Route path="/contacts/:filter/:page" component={FriendListApp}/>
            <Route exact path="/contacts/:filter" component={FriendListApp}/>
            <Route exact path="/" component={FriendListApp}/>
        </div>
)

export default Root
