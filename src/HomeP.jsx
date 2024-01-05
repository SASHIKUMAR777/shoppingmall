import React from 'react';
import styled from 'styled-components';
import ExpandableDropdown from './ExpandableDropdown';
import categoriesData from './foljson/categories.json';
import ProductCard from './ProductCard';
import productsData from './foljson/products.json';
// import Offer from './Offer';
// import OfferData from './offer.json';

const HomeContainer = styled.div`
  padding: 20px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h1`
  margin-left: 10px;
  font-size: 24px;
  color: #333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const HomeP = () => {
  return (
    <HomeContainer>
      {/* <CategoriesContainer>
        {categoriesData.categories.map((category, index) => (
          <ExpandableDropdown key={index} category={category} />
        ))}
      </CategoriesContainer> */}
      <SectionTitle>Best deals</SectionTitle>
      <ProductGrid>
        {productsData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductGrid>
      <SectionTitle>Top mobiles</SectionTitle>
      <ProductGrid>
        {productsData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductGrid>
      {/* <SectionTitle>Offers</SectionTitle>
      <OfferGrid>
        {OfferData.offers.map((offer, index) => (
          <Offer key={index} offer={offer} />
        ))}
      </OfferGrid> */}
    </HomeContainer>
  );
}

export default HomeP;
