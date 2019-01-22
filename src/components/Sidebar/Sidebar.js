import React from 'react';
import { withStyles } from '@material-ui/core';
// import Input from '@material-ui/core/Input';

import InstaFeed from './InstaFeed';
import SocialLinks from './SocialLinks';
import AboutMini from './AboutMini';

const styles = theme => ({
    sidebar: {
        flex: '0 0 300px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',

        [theme.breakpoints.down('sm')]: {
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
            borderBottomColor: '#FFEC96'
        },
    },
    footer: {
        fontFamily: "'Zeyada', cursive",
        fontSize: '1.2rem',
        textAlign: 'center',
        justifySelf: 'flex-end',
        padding: '1rem 0'
    },
    heart: {
        fontSize: '10px'
    },
});

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
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                /> */}
                <AboutMini />
                <SocialLinks />
                <InstaFeed />
                <footer className={classes.footer}>
                    <div>Made with <small className={classes.heart}>♡</small> by <a href='https://github.com/pramodsum'>Sumedha</a></div>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);