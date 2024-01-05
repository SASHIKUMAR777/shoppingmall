import React from 'react';
import styled from 'styled-components';

const OfferCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`;

const Offer = ({ offer }) => {
  return (
    <OfferCard className="offer-card">
      <img src={offer.image} alt={offer.title} />
    </OfferCard>
  );
}

export default Offer;
