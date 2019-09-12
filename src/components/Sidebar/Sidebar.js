import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AdSense from 'react-adsense';

import InstaFeed from './InstaFeed';
import SocialLinks from './SocialLinks';
import AboutMini from './AboutMini';

import bgy from '../../assets/bgyl.png';

const styles = {
  sidebar: {
    flex: '0 0 300px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',

    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: '1rem 0',
  },
  inputLabel: {
    fontFamily: "'Homemade Apple', cursive",
    lineHeight: 2,
  },
  inputFocused: {
    '&:after': {
      borderBottomColor: '#FFEC96',
    },
  },
  patreonBtn: {
    background: `url(${bgy}) repeat`,
    padding: '30px',
    margin: '10px auto 20px',
    border: 'black 1px dotted',
    borderRadius: '4px',
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '21px',
    textTransform: 'uppercase',
    letterSpacing: '.1em',

    '&:hover': {
      fontWeight: '900',
      border: 'black 1px solid',
    },
  },
};

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sidebar}>
        {/* <Input
                    className={classes.input}
                    placeholder="Where's my noms?..."
                    htmlFor="custom-css-standard-input"
                    fullWidth={true}
                    classes={{
                      root: classes.inputLabel,
                      focused: classes.inputFocused,
                    }}
                    inputProps={{√√
                        'aria-label': 'Description',
                    }}
                /> */}
        <AboutMini />
        <a
          className={classes.patreonBtn}
          href="https://www.patreon.com/bePatron?u=20663425"
          data-patreon-widget-type="become-patron-button">
          Help us write a cookbook!
        </a>
        <script async src="https://c6.patreon.com/becomePatronButton.bundle.js" />
        <SocialLinks />
        <InstaFeed />
        {/* <AdSense.Google
          client="ca-pub-2905840351559408"
          slot="1776887355"
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
