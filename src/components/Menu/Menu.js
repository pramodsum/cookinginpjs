import React from 'react';
import styled from '@emotion/styled';
import ResponsiveMenu from 'react-responsive-navbar';
// import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';

const Wrapper = styled.nav`
  padding: 8px;

  @media screen and (max-width: 960px) {
    padding: 20px 0;
  }
`;

const home = {
  name: 'Home',
  slug: '/',
};

const categories = [
  home,
  {
    name: 'Herbivores',
    slug: '/tag/herbivores',
  },
  {
    name: 'Carnivores',
    slug: '/tag/carnivores',
  },
  {
    name: 'Sugar Rush',
    slug: '/tag/desserts',
  },
  {
    name: 'Noodz',
    slug: '/tag/noodz',
  },
  {
    name: 'Giggle Juice',
    slug: '/tag/giggle-juice',
  },
];

const Menu = ({ activeCategory = home.slug, collapsed = false }) => (
  <Wrapper>
    <ResponsiveMenu
      menuOpenButton={<FontAwesomeIcon className="fa-2x" icon={['fas', 'bars']} />}
      menuCloseButton={<FontAwesomeIcon className="fa-2x" icon={['fas', 'times']} />}
      changeMenuOn="960px"
      menu={<Nav categories={categories} activeCategory={activeCategory} collapsed={collapsed} />}
    />
  </Wrapper>
);

export default Menu;
