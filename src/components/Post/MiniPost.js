import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';
import transformImage from '../../utils/transformImage';

import bgy from '../../assets/bgyl.png';

const styles = {
  post: {
    marginBottom: '1rem',
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

    '& a:hover': {
      background: `url(${bgy}) repeat`,
    },
  },
  content: {
    overflowWrap: 'break-word',
    fontSize: '15px',
  },
  img: {
    maxWidth: 'auto',
    height: '100%',
    width: '100%',
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
      opacity: '.75',
    },
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
    letterSpacing: '0.2em',
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
    marginRight: '10px',
  },
  tag: {
    fontFamily: "'Homemade Apple', cursive",
    fontSize: '15px',
    marginRight: '3px',
    textTransform: 'lowercase',
  },
});

const MiniPost = ({ classes, post }) => {
  const { id, slug, feature_image, title, published_at, tags, excerpt } = post;
  return (
    <article id={id} className={classes.post}>
      <h1 className={classes.title}>
        <a href={`/${slug}/`}>{title}</a>
      </h1>
      {feature_image && (
        <a href={`/${slug}`}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={transformImage(feature_image)} />
            <div className={classes.imgTag}>{published_at}</div>
          </div>
        </a>
      )}
      <div className={classes.content}>{excerpt}</div>
      <ul className={classes.footer}>
        <div>{readingTimeHelper(post)}</div>
        {/* <LoyaltyOutlined className={classes.icon} /> */}
        {tags.map(({ id, name, slug: tagSlug }, index) => (
          <li key={id} className={classes.tag}>
            <a href={`/tags/${tagSlug}`}>#{name}</a>
            {index < tags.length - 1 && ', '}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default withStyles(styles)(MiniPost);
