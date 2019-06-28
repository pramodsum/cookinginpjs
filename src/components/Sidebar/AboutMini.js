import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import profileImg from '../../assets/about.jpg';
import bgy from '../../assets/bgyl.png'

const styles = theme => ({
    img: {
        padding: '1rem 2rem 0',
        width: '100%',
        height: 'auto',
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
        fontSize: '1rem',
        margin: '8px 0',
        
        '& a': {
            padding: '8px 0'
        },
        
        '& a:hover': {
            background: `url(${bgy}) repeat`,
        },
    },
    about: {
        fontSize: '0.9rem',
    },
    aboutEmphasized: {
        // fontFamily: "'Homemade Apple', cursive",
        fontSize: '.9rem',
    },
});

const SUMU_EMAIL = 'mailto:sumu@cookinginpjs.com';
const ANU_EMAIL = 'mailto:anu@cookinginpjs.com';

const AboutMini = ({ classes }) => (
    <div>
        <img className={classes.img} src={profileImg} />
        <h3 className={classes.aboutTitle}>Hello and welcome!</h3>
        <p className={classes.aboutSubtitle}>We're <a href={SUMU_EMAIL}>Sumu</a> & <a href={ANU_EMAIL}>Anu</a>.</p>
        <p className={classes.about}>We've known each other pretty much forever, and this blog is our way of documenting our culinary exploits, and some non-culinary exploits as well. We're not always on the same page, or in the same state, or even on the same continent, but two things are generally true: </p>
        <p className={classes.aboutEmphasized}>At least one of us is not paying attention</p>
        <p className={classes.aboutEmphasized}>At least one of us is wearing her pajamas</p>
    </div>
);

export default withStyles(styles, { withTheme: true })(AboutMini);