import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Sidebar from '../Sidebar/Sidebar';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 3rem 1rem',
    overflowX: 'hidden',

    '@media screen and (max-width: 960px)': {
      padding: '0 2rem 1rem',
    },
  },
  content: {
    width: '100%',
    paddingRight: '2rem',

    '@media screen and (max-width: 600px)': {
      paddingRight: '0',
    },
  },
};

const Main = ({ classes, children }) => (
  <main className={classes.main}>
    <div className={classes.content}>{children}</div>
    <Sidebar />
  </main>
);

export default withStyles(styles)(Main);
