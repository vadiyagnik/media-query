import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../assets/css/products/products.css';

const Products = () => {
    return (
        <React.Fragment>
            <nav className='searchNav'>
                <input type="search" name="search" id="search" placeholder='search Products...!' autocomplete="off"/>
                <Link to='featured'>Featured Products</Link>
                <Link to='new'>New Products</Link>
            </nav>
            <Outlet />
        </React.Fragment>
    )
}

export default Products

