import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bgy from '../../assets/bgyl.png';

const MAIL_URL = 'mailto:hello@cookinginpjs.com'
const INSTAGRAM_URL = 'https://www.instagram.com/cookinginpjs/';
const FACEBOOK_URL = 'https://www.facebook.com/wearecookinginpjs/';
const TWITTER_URL = 'https://www.twitter.com/cookinginpjs/';

const styles = theme => ({
    socialLinks: {
        display: 'flex',
        flexFlow: 'row wrap',
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
});

const SocialLinks = ({ classes }) => (
    <div className={classes.socialLinks}>
        <a href={INSTAGRAM_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'instagram']} size='2x' /></a>
        <a href={FACEBOOK_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'facebook-square']} size='2x' /></a>
        <a href={TWITTER_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['fab', 'twitter-square']} size='2x' /></a>
        <a href={MAIL_URL} className={classes.icon} ><FontAwesomeIcon className={classes.socialIcon} icon={['far', 'envelope']} size='2x' /></a>
    </div>
);

export default withStyles(styles, { withTheme: true })(SocialLinks);