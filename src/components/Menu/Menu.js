import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import ExpansionPanel from './ExpansionPanel';
import ExpansionPanelSummary from './ExpansionPanelSummary';
import Nav from './Nav';

const styles = {
  nav: {
    '@media screen and (max-width: 960px)': {
      paddingBottom: '1rem',
    },
  },
  icon: {
    fontSize: '36px',
  },
};

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

const Menu = ({ activeCategory = home.slug, classes }) => (
  <nav className={classes.nav}>
    <div mdUp implementation="css">
      <ExpansionPanel defaultExpanded={false}>
        <ExpansionPanelSummary expandIcon={<MenuIcon className={classes.icon} />} />
        <Nav categories={categories} activeCategory={activeCategory} />
      </ExpansionPanel>
    </div>
    <div smDown implementation="css">
      <Nav categories={categories} activeCategory={activeCategory} />
    </div>
  </nav>
);

export default withStyles(styles)(Menu);
