import React from 'react'
import { CardStyle } from './Card.style'
import GetRating from '../GetRating/GetRating';



const Card = ({ product }) => {
    return (
        <CardStyle>
                 <div className="card">
        <img src={product.thumbnail} alt={product.title} className="card-image" />
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${parseInt(product.price * (1 - product.discountPercentage / 100))}
</p>
        <p className="card-discount">{product.discountPercentage}% off</p>
        <GetRating rating={product.rating}/>
        <p className="card-stock">Stock: {product.stock} left</p>
        <p className="card-brand">Brand: {product.brand}</p>
        <p className="card-category">Category: {product.category}</p>
      </div> 
        </CardStyle>

    );
  };
export default Card