import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    categoryList: {
        margin: 0,
        paddingInlineStart: 0,
        borderTop: '1px solid #eee'
    },
    category: {
        listStyle: 'none',
        padding: '0.5rem',
        borderBottom: '1px solid #eee'
    },
    categoryNav: {
        background: 'none',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '21px',
        textTransform: 'uppercase',
        letterSpacing: '.2em',
        
        '&:hover': {
            color: 'gray',
            transition: '.25s ease-in-out'
        }
    },
    activeCategory: {
        fontWeight: 'bolder'
    }
};

const home = {
    name: 'Home',
    slug: '/'
};

const categories = [
    home,
    {
        name: 'Herbivores',
        slug: '/tag/herbivores'
    },
    {
        name: 'Carnivores',
        slug: '/tag/carnivores'
    },
    {
        name: 'Sugar Rush',
        slug: '/tag/desserts'
    },
    {
        name: 'Giggle Juice',
        slug: '/tag/giggle-juice'
    },
    {
        name: 'Eating Out',
        slug: '/tag/eating-out'
    },
    {
        name: 'About',
        slug: '/tag/about'
    }
];

class CategoryNav extends React.PureComponent {
    render() {
        const { classes, activeCategory = home.slug } = this.props;
        return (
            <ul className={classes.categoryList}>
                {categories.map(({ name, slug }) => {
                    const activeClass = activeCategory === slug ? classes.activeCategory : '';
                    return (
                        <li key={slug} className={classes.category} >
                            <a href={slug} className={`${classes.categoryNav} ${activeClass}`}>{name}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default withStyles(styles)(CategoryNav);