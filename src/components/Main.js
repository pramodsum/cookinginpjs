import React from 'react'
import { withStyles } from '@material-ui/core';

import Sidebar from './Sidebar/Sidebar';
import bgy from '../assets/bgyl.png';

const styles = theme => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0 3rem 1rem',
        overflowX: 'hidden'
    },
    content: {
        width: '100%',
        paddingRight: '2rem',

        [theme.breakpoints.down('sm')]: {
            paddingRight: '0'
        },
    },
});

const Main = ({ classes, children }) => (
    <main className={classes.main}>
        <div className={classes.content}>{children}</div>
        <Sidebar />
    </main>
);

export default withStyles(styles, {withTheme: true})(Main);
