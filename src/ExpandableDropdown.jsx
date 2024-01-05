import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover .subcategories,
  &:hover .subsubcategories {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 5px 5px;
  z-index: 1;
`;

const Subcategories = styled(DropdownContent)`
  width: 200px;
`;

const Subsubcategories = styled(DropdownContent)`
  width: 250px;
`;

const CategoryName = styled.span`
  display: block;
  padding: 10px;
  color: #333;
`;

const SubcategoryItem = styled(CategoryName)`
  &:hover {
    background-color: #f2f2f2;
  }
`;

const ExpandableDropdown = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContainer
      onMouseEnter={handleHover}
      onMouseLeave={handleClose}
    >
      <CategoryName>{category.name}</CategoryName>
      {category.subcategories && isOpen && (
        <Subcategories className="subcategories">
          {category.subcategories.map((subcategory, index) => (
            <SubcategoryItem key={index} category={subcategory} />
          ))}
        </Subcategories>
      )}
      {category.subsubcategories && isOpen && (
        <Subsubcategories className="subsubcategories">
          {category.subsubcategories.map((subsubcategory, index) => (
            <CategoryName key={index}>
              {subsubcategory.name}
            </CategoryName>
          ))}
        </Subsubcategories>
      )}
    </DropdownContainer>
  );
};

export default ExpandableDropdown;
