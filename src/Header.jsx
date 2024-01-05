import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 5px;
    margin-right: 5px;
  }
`;

const Navigation = styled.div`
  display: flex;

  a {
    margin-right: 15px;
    text-decoration: none;
    color: #fff;
  }
`;

const UserActions = styled.div`
  a {
    margin-left: 15px;
    text-decoration: none;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo */}
      <Logo>
        <a href="/">
          <img src="https://seeklogo.com/images/L/latoken-la-logo-55DD67031B-seeklogo.com.png" alt="AjioLogo" />
        </a>
      </Logo>

      {/* Search Bar */}
      <SearchBar>
        <input type="text" placeholder="Search products..." />
        <button type="button">Search</button>
      </SearchBar>

      {/* Navigation Links */}
      <Navigation>
        <a href="/products">Men</a>
        <a href="/products">Women</a>
        <a href="/products">Kids</a>
        <a href="/products">Brands</a>
        {/* Add more navigation links as needed */}
      </Navigation>

      {/* User Actions */}
      <UserActions>
        <a href="/cart">
          <i className="fa fa-shopping-cart"></i> Cart
        </a>
        <a href="/login">Login</a>
        {/* Add more user-related actions as needed */}
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;
