import React from 'react';
import { withStyles } from '@material-ui/core';
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
    },
    imgContainer: {
        background: 'white',
        margin: '-1.75em -1.75rem 0',
        position: 'relative',
        overflow: 'hidden',
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
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        lineHeight: '32px'
    },
    content: {
        overflowWrap: 'break-word',
        fontSize: '15px',
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
};

const MiniPost = ({ classes, id, slug, title, feature_image, published_at, markdown, tags }) => (
    <article id={id} className={classes.post}>
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
                source={`${markdown.slice(0, 1000)}...`} 
                skipHtml={true}
                disallowedTypes={[
                    'image',
                    'html',
                    'iframe'
                ]}
            />
            <div>{published_at}</div>
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
    </article>
);

export default withStyles(styles)(MiniPost);