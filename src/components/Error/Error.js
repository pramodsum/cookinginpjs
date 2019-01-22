import React from 'react'
import { withStyles } from '@material-ui/core';
import { Link } from 'gatsby'
import CardMedia from '@material-ui/core/CardMedia';

import miggy from '../../assets/Miggy.png';
import bgy from '../../assets/bgyl.png';

const styles = theme => ({
    main: {
        justifyContent: 'center',
        padding: '0 2rem 1rem',
        overflowX: 'hidden',

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    title: {
        fontFamily: "'Zeyada', cursive",
        fontSize: '3rem',
        lineHeight: '1',
        marginBottom: '0',
        marginTop: '0.5rem',
        textTransform: 'capitalize',
        overflowWrap: 'break-word',

        '& a:hover': {
            background: `url(${bgy}) repeat`
        }
    },
    link: {
        '& a:hover': {
            background: `url(${bgy}) repeat`
        }
    },
    img: {
        backgroundSize: 'contain',
        height: 0,
        paddingTop: '100%',
        margin: '1rem 0',
        width: '100%',
        transition: 'opacity .4s',
        maxHeight: '500px',
        position: 'relative',
    },
});

const Error = ({ classes }) => (
    <div className={classes.main}>
        <h1 className={classes.title} >Ruh Roh!</h1>
        <div>This is not the page you're looking for... the sadness. <Link to='/' className={classes.link}>Let’s go back home</Link></div>
        <CardMedia className={classes.img} image={miggy} />
    </div>
);

export default withStyles(styles, {withTheme: true})(Error);
