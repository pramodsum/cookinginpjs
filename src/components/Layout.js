import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import { rhythm, scale } from '../utils/typography'
import Header from './Header';

const styles = {
    home: {
      background: '#f5f4f2'
    },
    content: {
      padding: '20px'
    },
    '@global *': {
        fontFamily: 'Helvetica Neue,Helvetica,sans-serif',
    },
    '@global a': {
        color: 'black',
        textDecoration: 'none',
        boxShadow: 'none'
    },
    '@global a:hover': {
        color: 'gray'
    }
};

class Layout extends React.Component {
  render() {
    const { title, children, classes } = this.props
    return (
      <div className={classes.home}>
        <CssBaseline />
        <Header title={title} />
        <div className={classes.content}>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(Layout);
