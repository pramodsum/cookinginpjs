import React from 'react';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Menu from '../Menu/Menu';

// import divider from '../../assets/fork-divider-long.png';
import bgy from '../../assets/bgyl.png'

const styles = theme => ({
    header: {
        fontFamily: "'Playfair Display', Georgia, Serif",
        background: 'white',
        color: 'black',
        padding: '2rem 2rem 0',
        wordBreak: 'break-word',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontSize: '5rem',
        margin: 0,

        '& a': {
            padding: '0 30px'
        },

        '& a:hover': {
            background: `url(${bgy}) repeat`,
        },

        '@media screen and (max-width: 960px)': {
            fontSize: '4rem',
            textAlign: 'center',

            '& a': {
                padding: '0'
            },
        },

        '@media screen and (max-width: 600px)': {
            fontSize: '3.75rem',
        },
    },
    subtitle: {
        fontSize: '1.15rem',
        fontWeight: 300,
        color: 'gray',
        fontFamily: "'Homemade Apple', cursive",
        margin: '15px 0 0',

        '@media screen and (max-width: 960px)': {
            fontSize: '1.05rem',
        },

        '@media screen and (max-width: 600px)': {
            fontSize: '0.9rem',
        },
    },
    divider: {
        overflow: 'hidden',
        paddingBottom: '15px',
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    onResize = () => {
        var innerHeight = jQuery('.js-sidebar-inner').height();
        var footerHeight = jQuery('.js-sidebar-footer').height();
        var windowHeight = jQuery(window).height();
        var switchClass = ( innerHeight + footerHeight + 192 ) > windowHeight ? true : false;
        if ( switchClass ) {
            jQuery('.js-sidebar-footer').addClass('sidebar-footer-static');
        } else {
            jQuery('.js-sidebar-footer').removeClass('sidebar-footer-static');
        }
    }

    render() {
        const { classes, title, onCategoryToggle = () => {} } = this.props;
        return (
            <header className={classes.header}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        <Link to={'/'}>
                            {title}
                        </Link>
                    </h1>
                    <h3 className={classes.subtitle}>Stories and Musings from Wayfaring Adventurers and Aspiring Home Cooks.</h3>
                    {/* <img className={classes.divider} src={divider} /> */}
                    <Menu onCategoryToggle={onCategoryToggle} />
                </div>
            </header>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Header);