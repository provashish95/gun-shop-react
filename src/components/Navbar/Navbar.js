import React from 'react';
import './Navbar.css';
import { BsFillCartFill } from 'react-icons/bs';
;
const Navbar = ({ openModal, cart }) => {

    return (
        <nav className="navbar">
            <h1>Gun Shop</h1>
            <div className='cart-counter' onClick={openModal}>
                <span>{cart.length}</span>
                <BsFillCartFill className="icon" color="#fff" />
            </div>

        </nav>
    );
};

export default Navbar;