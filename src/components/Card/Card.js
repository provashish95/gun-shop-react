import React from 'react';

const Card = (props) => {
    const { name, price, img, category, capacity, bullet, action } = props.gun;
    return (
        <div>
            <img src={img} alt="img" style={{ width: '200px' }} />
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <p>Capacity: {capacity}</p>
            <p>Bullet: {bullet}</p>
            <p>Action: {action}</p>
        </div>
    );
};

export default Card;