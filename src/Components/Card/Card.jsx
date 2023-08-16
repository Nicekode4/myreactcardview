import React from 'react'
import { CardStyle } from './Card.style' //importing the styling for card
import GetRating from '../GetRating/GetRating.jsx'; //Importing the GetRating component



const Card = ({ product }) => {  //Start of the Card component with teh prop as a destruktiot object
    return (
        <CardStyle> // Card style component
                 <div className="card" >
                    <img src={product.thumbnail} alt={product.title} className="card-image" />
                    <div className='text-div'>
                    <p className="card-category">Category: {product.category}</p>
                        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${parseInt(product.price * (1 - product.discountPercentage / 100))}<p className="card-discount">{product.discountPercentage}% off</p></p>
        
        <GetRating rating={product.rating}/> //Passing the product rating prop to the GetRating componenet
                    </div>
        
        
      </div> 
        </CardStyle> // end of thr styleing component

    );
  };
export default Card