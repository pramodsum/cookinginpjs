import React from 'react';
import styled from '@emotion/styled';

import bgy from '../../assets/bgyl.png';

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.collapsed ? '0' : '8px 0 0'};
  margin-block-start: ${props => props.collapsed ? '0' : '.5rem'};
  margin-block-end: ${props => props.collapsed ? '0' : '.5rem'};

  @media screen and (max-width: 960px): {
    flex-direction: column;
    border-top: 1px solid lightgray;
  }
`;

const CategoryWrapper = styled.li`
  list-style: none;
  padding: ${props => props.collapsed ? '.35rem' : '.85rem'};

  @media screen and (max-width: 960px): {
    border-bottom: 1px solid lightgray;
  },

  &:hover: {
    background: url(${bgy}) repeat,
  },
`;

const Category = styled.a`
  font-size: 1rem;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const ActiveCategory = styled(Category)`
  font-weight: bolder;
`;

const Nav = ({ categories, activeCategory, collapsed }) => (
  <CategoryList collapsed={collapsed}>
    {categories.map(({ name, slug }) => (activeCategory === slug ? 
      <CategoryWrapper collapsed={collapsed} key={slug}><ActiveCategory href={slug}>{name}</ActiveCategory></CategoryWrapper> : 
      <CategoryWrapper collapsed={collapsed} key={slug}><Category href={slug}>{name}</Category></CategoryWrapper>
    ))}
  </CategoryList>
);

export default Nav;
