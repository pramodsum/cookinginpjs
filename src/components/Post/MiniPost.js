import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from "gatsby";
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    post: {
        paddingBottom: '1.5rem',
        flex: 'auto',
    },
    main: {
        padding: '1.5rem',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    },
    imgContainer: {
        background: 'white',
        margin: '-1.75em -1.75rem 0',
        position: 'relative',
        overflow: 'hidden',
        // maxHeight: '250px',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 3px 1px -2px rgba(0,0,0,0.12)',
    },
    img: {
        height: 0,
        paddingTop: '100%',
        width: '100%',
        transition: 'opacity .4s',

        '&:hover': {
            opacity: '.75'
        }
    },
    title: {
        // fontFamily: "'Playfair Display', Georgia, Serif",
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word'
    },
    content: {
        color: 'dimgray',
        overflowWrap: 'break-word',
        fontSize: '15px',

        '& iframe': {
            display: 'none',
            width: '100%',
            height: 'auto'
        }
    }
};

const MiniPost = ({ classes, id, slug, title, feature_image, plaintext }) => (
    <div id={id} className={classes.post}>
        <Paper className={classes.main}>
            { feature_image && 
                <div className={classes.imgContainer}>
                    <Link to={slug}>
                        <CardMedia
                            className={classes.img}
                            image={feature_image}
                        />
                    </Link>
                </div>
            }
            <h2><Link className={classes.title} to={slug}>{title}</Link></h2>
            <p 
                className={classes.content} 
                dangerouslySetInnerHTML={{ __html: `${plaintext.slice(0,500)}...` }} 
            />
        </Paper>
    </div>
);

export default withStyles(styles)(MiniPost);