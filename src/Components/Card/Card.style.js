import styled from "styled-components";

export const CardStyle = styled.section`
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  font-size: 1.2rem;
  margin-top: 8px;
}

.card-description {
  margin-top: 8px;
}

.card-price {
  font-weight: bold;
  margin-top: 8px;
}

.card-discount {
  color: #e74c3c;
  margin-top: 4px;
}

.card-rating {
  margin-top: 4px;
}

.card-stock {
  margin-top: 4px;
}

.card-brand,
.card-category {
  margin-top: 8px;
  font-style: italic;
  color: #555;
}

`