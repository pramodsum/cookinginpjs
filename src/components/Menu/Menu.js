import React from 'react';
import { withStyles } from '@material-ui/core';

import MenuNav from './MenuNav';

const styles = theme => ({
    toggleNav: {
        position: 'relative',
        margin: '10px auto',
        transition: '.5s ease-in-out',
        color: 'black',
        width: '28px',
        height: '28px',
        display: 'block',
        transform: 'rotate(0deg)',
        cursor: 'pointer',
        border: 'none', 
        background: 'transparent',

        '&:focus': {
            outline: 'none'
        },

        '&:hover': {
            color: 'gray'
        }
    },
    navSpan: {
        position: 'absolute',
        height: '4px',
        borderRadius: '2px',
        width: '100%',
        opacity: 1,
        left: 0,
        transition: '.25s ease-in-out',
        display: 'block',
        transform: 'rotate(0deg)',
        background: 'black',

        '&:hover': {
            background: 'gray'
        }
    },
    firstNav: {
        top: '1px',
        '& .open': {
            top: '14px',
            width: 0,
            left: '50%'
        }
    },
    middleNav: {
        top: '11px',
        '& .open': {
            top: '14px',
            width: 0,
            left: '50%'
        }
    },
    fourthNav: {
        top: '21px'
    }
});

/*
.toggle-nav.open span:first-child {
    top: 14px;
    width: 0;
    left: 50%
}

.toggle-nav.open span:nth-child(2) {
    transform: rotate(45deg)
}

.toggle-nav.open span:nth-child(3) {
    transform: rotate(-45deg)
}

.toggle-nav.open span:nth-child(4) {
    top: 14px;
    width: 0;
    left: 50%
}
*/

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    onToggle = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    render() {
        const { classes, onCategoryToggle } = this.props;
        const { isOpen } = this.state;

        const buttonClasses = isOpen ? 'open' : '';

        return (
            <div>
                {/* eslint-disable-next-line */}
                {/* <button className={classes.toggleNav} onClick={this.onToggle}>
                    <span className={`${classes.navSpan} ${classes.firstNav} ${buttonClasses}`} />
                    <span className={`${classes.navSpan} ${classes.middleNav} ${buttonClasses}`} />
                    <span className={`${classes.navSpan} ${classes.middleNav} ${buttonClasses}`} />
                    <span className={`${classes.navSpan} ${classes.fourthNav} ${buttonClasses}`} />
                </button>  */}
                <MenuNav isOpen={true} onClick={onCategoryToggle} />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Menu);