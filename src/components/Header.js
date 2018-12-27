import React from 'react';
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
// import Menu from './Menu/Menu';

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 1px 3px lightgray',
        paddingTop: '2rem',
        paddingBottom: '1rem',
        color: 'black',

        '&:hover': {
            color: 'gray'
        }
    },
    blogTitle: {
        fontSize: '2.5rem',
        fontFamily: 'Unna, Georgia, Serif',
        margin: 0
    },
    blogSubtitle: {
        fontSize: '1.25rem',
        fontWeight: 300,
        color: 'gray',
        margin: '20px 0 10px'
    }
};


const Header = ({ classes, title, onCategoryToggle = () => {} }) => (
    <div className={classes.header}>
        <h1 className={classes.blogTitle}>
            <Link to={'/'}>
                {title}
            </Link>
        </h1>
        <h3 className={classes.blogSubtitle}>Wayfaring Adventurers and Aspiring Home Cooks.</h3>
        {/* <Menu onCategoryToggle={this.onCategoryToggle} /> */}
    </div>
);

export default withStyles(styles)(Header);