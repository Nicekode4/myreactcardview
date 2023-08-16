import styled from "styled-components";

export const CardStyle = styled.section`
/* styles.css */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 100%;
  height: 35vh;
  background-color: #f7f7f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
}

.card-image {
  width: 100%;
  
  height: 35vh;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1vw;
}

.text-div{
    
}

.card-title {
  font-size: 1.4rem;
  margin-top: 12px;
}

.card-description {
  margin-top: 8px;
  color: #444;
}

.card-price {
  font-weight: bold;
  margin-top: 12px;
  height: 1vh;
  font-size: 1.5rem;
}

.card-discount {
  color: #e74c3c;
  margin-top: 6px;
  font-size: 0.7rem;
  vertical-align: top;
  display: inline;
}

.card-rating {
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.card-rating span {
  margin-left: 4px;
}

.card-stock {
  margin-top: 6px;
  font-size: 0.9rem;
}

.card-brand,
.card-category {
  margin-top: 12px;
  font-style: italic;
  color: #777;
}

.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}


`