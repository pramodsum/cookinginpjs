import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from "gatsby";
import { white } from 'ansi-colors';

const styles = {
    post: {
        width: '50%',
        padding: '0 0.5rem 1rem',
        flex: 'auto',
        position: 'relative'
    },
    container: {
        background: 'white',
        boxShadow: '0 1px 3px hsla(0,0%,39%,.15)',
        padding: '2rem'
    },
    imgContainer: {
        margin: '-2rem -2rem 0',
        position: 'relative',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        transition: 'opacity .4s',

        '&:hover': {
            opacity: '.75'
        }
    },
    title: {
        fontFamily: '"Playfair Display", Georgia, Serif',
        textTransform: 'capitalize',
        overflowWrap: 'break-word'
    },
    content: {
        color: 'dimgray',
        overflowWrap: 'break-word',

        '& iframe': {
            display: 'none',
            width: '100%',
            height: 'auto'
        }
    }
};

const MiniPost = ({ classes, id, slug, title, feature_image, plaintext }) => (
    <div id={id} className={classes.post}>
        <div className={classes.container}>
            { feature_image && 
                <div className={classes.imgContainer}>
                    <Link to={slug}>
                        <img className={classes.img} src={feature_image} />
                    </Link>
                </div>
            }
            <h2><Link className={classes.title} to={slug}>{title}</Link></h2>
            <p 
                className={classes.content} 
                dangerouslySetInnerHTML={{ __html: `${plaintext.slice(0,500)}...` }} 
            />
        </div>
    </div>
);

export default withStyles(styles)(MiniPost);