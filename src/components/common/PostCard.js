import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import transformImage from '../../utils/transformImage';

import bgy from '../../assets/bgyl.png';

const styles = theme => ({
    post: {
        marginBottom: '1rem'
    },
    header: {
        margin: 0,
        marginBottom: '50px',
    },
    title: {
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        fontSize: '2rem',
        lineHeight: '3rem',
        marginBottom: '0',

        '& a:hover': {
            background: `url(${bgy}) repeat`
        },

        '& small': {
          fontSize: '1rem',
          fontWeight: '300',
          lineHeight: '21px',
          color: 'gray',
        }
    },
    content: {
        overflowWrap: 'break-word',
        fontSize: '15px',
    },
    'img': {
        maxWidth: 'auto',
        height: '100%',
        width: '100%'
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
        fontSize: '15px',
        marginRight: '3px',
        textTransform: 'lowercase',
    },
});

const PostCard = ({ classes, post }) => {
  const { id, slug, feature_image, title, published_at_pretty, tags, excerpt } = post;
  return (
    <article id={id} className={classes.post}>
        <h1 className={classes.title}>
          <a href={`/${slug}/`}>{title}</a>
          <br />
          <small>{readingTimeHelper(post)}</small>
        </h1>
        { feature_image &&
            <a href={`/${slug}`}>
                <Paper className={classes.imgContainer}>
                    <CardMedia className={classes.img} image={transformImage(feature_image)} />
                    <div className={classes.imgTag}>{published_at_pretty}</div>
                </Paper>
            </a>
        }
        <div className={classes.content}>{excerpt}</div>
        <ul className={classes.footer}>
            <LoyaltyOutlined className={classes.icon} />
            { tags.map((tag, index) => (
                <li key={tag.name} className={classes.tag}>
                    <a href={`/tag/${tag.slug}`}>#{tag.name}</a>
                    { index < tags.length - 1 && ', ' }
                </li>
            ))}
        </ul>
    </article>
  );
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default withStyles(styles, { withTheme: true })(PostCard);
