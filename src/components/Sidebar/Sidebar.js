import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextField from '@material-ui/core/TextField';

const INSTAGRAM_URL = 'https://www.instagram.com/cookinginpjs/';
const FACEBOOK_URL = 'https://www.facebook.com/wearecookinginpjs/';
const TWITTER_URL = 'https://www.twitter.com/cookinginpjs/';

const styles = {
    sidebar: {
        flex: '0 0 300px',
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: '0 1rem',
    },
    socialLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
        flex: 1,
        justifyContent: 'center'
    },
    icon: {
        padding: '10px 10px 0',
        display: 'block'
    },
    socialIcon: {
        fill: 'black',
        transition: '.25s ease-in-out',

        '&:hover': {
            fill: 'gray'
        }
    },
    footer: {
        fontFamily: "'Zeyada', cursive",
        textAlign: 'center',
        justifySelf: 'flex-end',
        padding: '1rem 0'
    },
    heart: {
        fontSize: '10px'
    },
};

class Sidebar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.sidebar}>
                <TextField
                    label="Search"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <div className={classes.socialLinks}>
                    <a href={INSTAGRAM_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'instagram']} size='2x' /></a>
                    <a href={FACEBOOK_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'facebook-square']} size='2x' /></a>
                    <a href={TWITTER_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'twitter-square']} size='2x' /></a>
                </div>
                <footer className={classes.footer}>
                    <div>Made with <small className={classes.heart}>♡</small> by <a href='https://github.com/pramodsum'>Sumedha</a></div>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);