import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as style from './Cart.css'
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'

const Cart = ({total_count}) => {
    return (
        <div className={style.smallCart}>
            <Link to="/cart"><FaShoppingCart/> ({total_count})</Link>
        </div>
    )
}

Cart.propTypes = {
    total_count: PropTypes.number,
}

export default Cart
