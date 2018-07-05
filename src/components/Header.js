import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active';

const HeaderLine = styled.div`
  background: #5c7cfa;
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const Item = styled(NavLink).attrs({
  activeClassName
})`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: table-cell;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    background: #748ffc;
  }
  &:active {
    background: white;
    color: #5c7cfa;
  }
  &.${activeClassName} {
    color: black;
  }
`;

const Header = () => {
  return (
    <Fragment>
      <HeaderLine>
        <Item exact to="/">
          홈
        </Item>
        <Item to="/about/whyj">소개</Item>
        <Item to="/posts">포스트</Item>
        <Item to="/me">mypage</Item>
        <Item to="/login">login</Item>
        <Item to="/search">Search</Item>
      </HeaderLine>
    </Fragment>
  );
};

export default Header;
