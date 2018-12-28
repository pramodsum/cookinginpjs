import React from 'react';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu/Menu';

const styles = {
    header: {
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 1px 3px lightgray',
        fontFamily: "'Playfair Display', Georgia, Serif",
        color: 'black',
        flexBasis: '300px',
        textAlign: 'right',
        padding: '2rem 2rem 1rem',
        wordBreak: 'break-word',
        flex: '0 0 auto',
        overflowY: 'auto',

        '&:hover': {
            color: 'gray'
        }
    },
    headerMobile: {
    },
    blogTitle: {
        fontSize: '3.5em',
        margin: 0
    },
    blogSubtitle: {
        fontSize: '1.25rem',
        fontWeight: 300,
        color: 'gray',
        margin: '15px 0'
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
            <div className={`header ${classes.header}`}>
                <h1 className={classes.blogTitle}>
                    <Link to={'/'}>
                        {title}
                    </Link>
                </h1>
                <h3 className={classes.blogSubtitle}>Stories and Musings from Wayfaring Adventurers and Aspiring Home Cooks.</h3>
                <Menu onCategoryToggle={onCategoryToggle} />
            </div>
        );
    }
}

export default withStyles(styles)(Header);