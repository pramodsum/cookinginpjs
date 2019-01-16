import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '@material-ui/core/Input';

import profileImg from '../../assets/about.jpg';
import bgy from '../../assets/bgyl.png';
import InstaFeed from './InstaFeed';

const INSTAGRAM_URL = 'https://www.instagram.com/cookinginpjs/';
const FACEBOOK_URL = 'https://www.facebook.com/wearecookinginpjs/';
const TWITTER_URL = 'https://www.twitter.com/cookinginpjs/';

const styles = theme => ({
    sidebar: {
        flex: '0 0 300px',
        textAlign: 'center',

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
    img: {
        padding: '1rem 2rem 0',
        width: '100%',
        transition: 'opacity .4s',
        borderRadius: '50%',

        '&:hover': {
            opacity: '.75'
        }
    },
    aboutTitle: {
        fontFamily: "'Homemade Apple', cursive",
        marginBottom: 0
    },
    aboutSubtitle: {
        fontSize: '1rem'
    },
    about: {
        fontSize: '0.9rem',
    },
    aboutEmphasized: {
        // fontFamily: "'Homemade Apple', cursive",
        fontSize: '.9rem',
    },
    socialLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        padding: '10px',
        display: 'block',
        transition: '.25s ease-in-out',

        '&:hover': {
            background: `url(${bgy}) repeat`,
        }
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
                <Input
                    className={classes.input}
                    placeholder='Search...'
                    htmlFor="custom-css-standard-input"
                    fullWidth={true}
                    classes={{
                      root: classes.inputLabel,
                      focused: classes.inputFocused,
                    }}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
                <img className={classes.img} src={profileImg} />
                <h3 className={classes.aboutTitle}>Hello and welcome!</h3>
                <p className={classes.aboutSubtitle}>We're Sumu & Anu.</p>
                <p className={classes.about}>We've known each other pretty much forever, and this blog is our way of documenting our culinary exploits, and some non-culinary exploits as well. We're not always on the same page, or in the same state, or even on the same continent, but two things are generally true: </p>
                <p className={classes.aboutEmphasized}>At least one of us is not paying attention</p>
                <p className={classes.aboutEmphasized}>At least one of us is wearing her pajamas</p>
                <div className={classes.socialLinks}>
                    <a href={INSTAGRAM_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'instagram']} size='2x' /></a>
                    <a href={FACEBOOK_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'facebook-square']} size='2x' /></a>
                    <a href={TWITTER_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'twitter-square']} size='2x' /></a>
                </div>
                <InstaFeed />
                <footer className={classes.footer}>
                    <div>Made with <small className={classes.heart}>♡</small> by <a href='https://github.com/pramodsum'>Sumedha</a></div>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);