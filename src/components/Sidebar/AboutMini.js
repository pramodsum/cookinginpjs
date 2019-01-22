import React from 'react';
import { withStyles } from '@material-ui/core';

import profileImg from '../../assets/about.jpg';

const styles = theme => ({
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
});

const AboutMini = ({ classes }) => (
    <div>
        <img className={classes.img} src={profileImg} />
        <h3 className={classes.aboutTitle}>Hello and welcome!</h3>
        <p className={classes.aboutSubtitle}>We're Sumu & Anu.</p>
        <p className={classes.about}>We've known each other pretty much forever, and this blog is our way of documenting our culinary exploits, and some non-culinary exploits as well. We're not always on the same page, or in the same state, or even on the same continent, but two things are generally true: </p>
        <p className={classes.aboutEmphasized}>At least one of us is not paying attention</p>
        <p className={classes.aboutEmphasized}>At least one of us is wearing her pajamas</p>
    </div>
);

export default withStyles(styles, { withTheme: true })(AboutMini);