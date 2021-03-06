import React from "react";
import './Card.css';
import { BsFillCartFill } from 'react-icons/bs';

const Card = (props) => {
    const { handleAddToCart } = props;
    const { name, price, img, bullet, action } = props.gun;

    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt='img' />
            </div>
            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {props.gun.capacity}</p>
                <p>Action : {action}</p>
            </div>
            <div className='add-to-cart'>
                <button onClick={() => handleAddToCart(props.gun)}><BsFillCartFill className="icon" /></button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;