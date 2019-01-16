import React from 'react';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import Markdown from 'react-markdown';

import bgy from '../../assets/bgyl.png';

const styles = theme => ({
    post: {
        marginBottom: '1rem'
    },
    header: {
        margin: 0,
        marginBottom: '50px'
    },
    title: {
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        lineHeight: '32px',

        '& a:hover': {
            background: `url(${bgy}) repeat`
        }
    },
    content: {
        overflowWrap: 'break-word',
        fontSize: '15px',
    },
    imgContainer: {
        position: 'relative',
    },
    img: {
        height: 0,
        paddingTop: '100%',
        margin: '1rem 0',
        width: '100%',
        transition: 'opacity .4s',
        maxHeight: '500px',
        position: 'relative',

        '&:hover': {
            opacity: '.75'
        }
    },
    imgTag: {
        top: '11px',
        left: '-11px',
        display: 'flex',
        zIndex: '1',
        position: 'absolute',
        flexWrap: 'wrap',
        background: '#FFEC96',
        padding: '0.5rem',
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '0.2em'
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
    },
});

const MiniPost = ({ classes, id, url, title, feature_image, published_at, markdown, tags, siteUrl }) => (
    <article id={id} className={classes.post}>
        <h1 className={classes.title}><a href={`${url}`}>{title}</a></h1>
        { feature_image && 
            <a href={`${url}`}>
                <Paper className={classes.imgContainer}>
                    <CardMedia className={classes.img} image={feature_image} />
                    <div className={classes.imgTag}>{published_at}</div>
                </Paper>
            </a>
        }
        <Markdown 
            className={classes.content} 
            source={`${markdown.slice(0, 1000)}...`} 
            disallowedTypes={[
                'image',
                'html',
                'iframe'
            ]}
        />
        <ul className={classes.footer}>
            <LoyaltyOutlined className={classes.icon} />
            { tags.map(({ id, name, slug }, index) => (
                <li key={id} className={classes.tag}>
                    <a href={`/tags/${slug}`}>#{name}</a>
                    { index < tags.length - 1 && ', ' }
                </li>
            ))}
        </ul>
    </article>
);

export default withStyles(styles, { withTheme: true })(MiniPost);