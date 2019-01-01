import React from 'react';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CategoryNav from './CategoryNav';

const styles = {
    nav: {
        paddingBottom: '1rem',
    }
};

const MenuNav = ({ isOpen, onClick, classes }) => (
    <div>
        {isOpen && 
            <div className={classes.nav}>
                <CategoryNav onClick={onClick}/>
            </div>
        }
    </div>
);

export default withStyles(styles)(MenuNav);