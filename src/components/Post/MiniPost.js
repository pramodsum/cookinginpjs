import React from 'react';
import { withStyles } from '@material-ui/core';
import { DateTime } from 'luxon';
import Paper from '@material-ui/core/Paper';
import { Link } from "gatsby";
import CardMedia from '@material-ui/core/CardMedia';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import Markdown from 'react-markdown';

const styles = {
    post: {
        margin: '1%',
        width: '47.5%'
    },
    '@media (max-width: 1024px)': {
        post: {
            width: '95%'
            
        }
    },
    main: {
        padding: '1rem 1.5rem',
        // boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 3px 1px -2px rgba(0,0,0,0.12)',
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
        maxHeight: '500px',

        '&:hover': {
            opacity: '.75'
        }
    },
    header: {
        margin: 0,
        marginBottom: '50px'
    },
    title: {
        // fontFamily: "'Playfair Display', Georgia, Serif",
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        lineHeight: '32px'
    },
    content: {
        // color: 'dimgray',
        overflowWrap: 'break-word',
        fontSize: '15px',

        '& iframe': {
            display: 'none',
            width: '100%',
            height: 'auto'
        }
    },
    footer: {
        listStyle: 'none',
        display: 'inline-flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginRight: '10px'
    },
    tag: {
        fontFamily: "'Homemade Apple', cursive",
        fontSize: '13px',
        marginRight: '3px',
        textTransform: 'lowercase',

        '& a': {
            // color: '#FFEC96',
            // color: '#92b3d4'
        }
    },
};

const MiniPost = ({ classes, id, slug, title, feature_image, plaintext, tags }) => (
    <div id={id} className={classes.post}>
        <Paper className={classes.main}>
            <h1 className={classes.header}><Link className={classes.title} to={slug}>{title}</Link></h1>
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
            <Markdown 
                className={classes.content} 
                source={`${plaintext.slice(0, 1000)}...`} 
                skipHtml={true}
                disallowedTypes={[
                    'image',
                    'html'
                ]}
            />
            <div>
                { DateTime.local().toLocaleString({ 
                    month: 'short', 
                    day: '2-digit',
                    year: 'numeric'
                })}
            </div>
            <ul className={classes.footer}>
                <LoyaltyOutlined className={classes.icon} />
                { tags.map(({ id, name, slug }, index) => (
                    <li key={id} className={classes.tag}>
                        <a href={`/tags/${slug}`}>#{name}</a>
                        { index < tags.length - 1 && ', ' }
                    </li>
                ))}
            </ul>
        </Paper>
    </div>
);

export default withStyles(styles)(MiniPost);