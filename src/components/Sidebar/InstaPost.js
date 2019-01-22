import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles = {
    post: {
        position: 'relative',
    },
    img: {
        margin: '.3rem 0',
        width: '9rem',
        height: '9rem',
        paddingTop: '9rem',
        transition: 'opacity .4s',
        borderRadius: '4px',

        '&:hover': {
            opacity: '.75'
        }
    },
    metadata: {
        position: 'absolute',
        top: '0',
        height: '100%',
        width: '100%',
        opacity: '0',
        transition: 'opacity 100ms ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bolder',

        '&:hover': {
            opacity: '1',
            background: 'rgba(255,255,255, 0.8)'
        }
    },
    likes: {
        color: 'LightCoral',
        margin: '0 5px'
    },
    comments: {
        color: 'SlateBlue',
        margin: '0 5px'
    }
};

const InstaPost = ({ classes, images, comments, likes, link }) => {
    return (
        <Paper className={classes.post}>
            <a href={link}>
                <CardMedia className={classes.img} image={images.thumbnail.url} />
                <div className={classes.metadata}>
                    <FontAwesomeIcon className={classes.likes} icon={['fas', 'heart']}  />
                    {likes.count}
                    <FontAwesomeIcon className={classes.comments} icon={['fas', 'comments']}  />
                    {comments.count}
                </div>
            </a>
        </Paper>
    );
}

export default withStyles(styles)(InstaPost);