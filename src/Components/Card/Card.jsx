import React from 'react'
import { CardStyle } from './Card.style'

const Card = ({ product }) => {
    return (
        <CardStyle>
                 <div className="card">
        <img src={product.thumbnail} alt={product.title} className="card-image" />
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <p className="card-discount">{product.discountPercentage}% off</p>
        <div className="card-rating">Rating: {product.rating}</div>
        <p className="card-stock">Stock: {product.stock} left</p>
        <p className="card-brand">Brand: {product.brand}</p>
        <p className="card-category">Category: {product.category}</p>
      </div> 
        </CardStyle>

    );
  };
export default Card