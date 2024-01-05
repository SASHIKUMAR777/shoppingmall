import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  background-color: #f2f2f2;
`;

const Category = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    .subcategories {
      display: block;
    }
  }
`;

const Subcategories = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

const Categories = () => {
  const categoriesData = [
    {
      name: 'Men',
      subcategories: ['Clothing', 'Footwear', 'Accessories', 'Activewear', 'Innerwear'],
    },
    {
      name: 'Women',
      subcategories: ['Clothing', 'Footwear', 'Accessories', 'Jewelry', 'Beauty'],
    },
    {
      name: 'Kids',
      subcategories: ['Boys', 'Girls', 'Infants', 'Toys', 'School Essentials'],
    },
    {
      name: 'Electronics',
      subcategories: ['Mobiles', 'Laptops', 'Audio', 'Cameras', 'Accessories'],
    },
    {
      name: 'Home & Furniture',
      subcategories: ['Furniture', 'Bedding', 'Decor', 'Kitchen', 'Lighting'],
    },
    // Add more categories as needed
  ];

  return (
    <CategoriesContainer>
      {categoriesData.map((category, index) => (
        <Category key={index}>
          {category.name}
          <Subcategories className="subcategories">
            {category.subcategories.map((subcat, subIndex) => (
              <div key={subIndex}>{subcat}</div>
            ))}
          </Subcategories>
        </Category>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
