import React from 'react';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu/Menu';

const styles = {
    'header': {
        fontFamily: "'Playfair Display', Georgia, Serif",
        background: 'white',
        boxShadow: '0 1px 3px lightgray',
        color: 'black',
        flexBasis: '300px',
        padding: '2rem 2rem 1rem',
        wordBreak: 'break-word',
        flex: '0 0 auto',
        overflowY: 'auto',

        '&:hover': {
            color: 'gray'
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        justifyContent: 'center',
        textAlign: 'right',
    },
    mobile: {
    },
    title: {
        fontSize: '3rem',
        margin: 0,
        letterSpacing: '-2px',
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 300,
        color: 'gray',
        fontFamily: "'Homemade Apple', cursive",
        margin: '15px 0'
    },
    footer: {
        fontFamily: "'Zeyada', cursive",
    }
};


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
                    <Menu onCategoryToggle={onCategoryToggle} />
                    <h4 className={classes.footer}>{"Made with <3 by Sumedha"}</h4>
                </div>
            </header>
        );
    }
}

export default withStyles(styles)(Header);