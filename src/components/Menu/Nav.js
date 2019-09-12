import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import bgy from '../../assets/bgyl.png';

const styles = {
  categoryList: {
    paddingInlineStart: 0,
    '-webkit-padding-start': 0,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px',

    '@media screen and (max-width: 960px)': {
      flexDirection: 'column',
      borderTop: '1px solid lightgray',
      margin: '8px 0',
    },
  },
  category: {
    listStyle: 'none',
    padding: '.85rem',

    '@media screen and (max-width: 960px)': {
      borderBottom: '1px solid lightgray',
    },

    '&:hover': {
      background: `url(${bgy}) repeat`,
    },
  },
  categoryNav: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '21px',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
  },
  activeCategory: {
    fontWeight: 'bolder',
  },
};

const Nav = ({ categories, activeCategory, classes }) => (
  <ul className={classes.categoryList}>
    {categories.map(({ name, slug }) => {
      const activeClass = activeCategory === slug ? classes.activeCategory : '';
      return (
        <li key={slug} className={classes.category}>
          <a href={slug} className={`${classes.categoryNav} ${activeClass}`}>
            {name}
          </a>
        </li>
      );
    })}
  </ul>
);

export default withStyles(styles)(Nav);
