import React from "react"
import { withStyles } from '@material-ui/core';

import MiniPost from '../Post/MiniPost';

const styles = {
    list: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '210rem',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden'
    },
    '@media (max-width: 1024px)': {
        list: {
            height: '95%',
            flexFlow: 'column',
            alignItems: 'center'
        }
    },
};

const PostList = ({ classes, posts }) => (
    <div className={classes.list}>
        {
            posts.map(({ node }) => <MiniPost {...node}  key={node.uuid} />)
        }
    </div>
);

export default withStyles(styles)(PostList);
