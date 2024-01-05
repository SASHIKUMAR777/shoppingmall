import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  color: #333;
`;

const Price = styled.p`
  margin: 0;
  font-size: 14px;
  color: #e44d26; /* Ajio's orange color */
`;

const ProductCard = ({ product }) => {
  return (
    <Card className="product-card">
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
    </Card>
  );
}

export default ProductCard;
