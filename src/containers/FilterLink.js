import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }) => (
    <li className={"nav-item"}>
    <NavLink
        to={filter === 'all' ? '/' : `/contacts/${ filter }`}
        className='nav-item nav-link'
        activeClassName='active'
    >
        {children}
    </NavLink>
    </li>
)

export default FilterLink