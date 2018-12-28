import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CategoryNav from './CategoryNav';

const styles = {
    nav: {
        paddingBottom: '1rem',
    },
    socialLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
        flex: 1,
        justifyContent: 'flex-end'
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
    }
};

const INSTAGRAM_URL = 'https://www.instagram.com/cookinginpjs/';
const FACEBOOK_URL = 'https://www.facebook.com/wearecookinginpjs/';
const TWITTER_URL = 'https://www.twitter.com/cookinginpjs/';

const MenuNav = ({ isOpen, onClick, classes }) => (
    <div>
        {isOpen && 
            <div className={classes.nav}>
                <CategoryNav onClick={onClick}/>
                <div className={classes.socialLinks}>
                    <a href={INSTAGRAM_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'instagram']} size='2x' /></a>
                    <a href={FACEBOOK_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'facebook-square']} size='2x' /></a>
                    <a href={TWITTER_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'twitter-square']} size='2x' /></a>
                </div>
            </div>
        }
    </div>
);

export default withStyles(styles)(MenuNav);