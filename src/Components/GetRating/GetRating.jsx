import React from 'react'

function GetRating({rating}) {
    let ratingEmoji;
    if (rating >= 4.5) {
      ratingEmoji = '⭐️⭐️⭐️⭐️⭐️';
    } else if (rating >= 4) {
      ratingEmoji = '⭐️⭐️⭐️⭐️';
    } else if (rating >= 3) {
      ratingEmoji = '⭐️⭐️⭐️';
    } else if (rating >= 2) {
      ratingEmoji = '⭐️⭐️';
    } else if (rating >= 1) {
      ratingEmoji = '⭐️';
    } else {
      ratingEmoji = 'No rating';
    }

    return (<div className="card-rating">{ratingEmoji}</div>)
}

export default GetRating