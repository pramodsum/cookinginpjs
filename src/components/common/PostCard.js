import React from 'react';
import PropTypes from 'prop-types';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';
import transformImage from '../../utils/transformImage';
import styled from '@emotion/styled';

import Image from './Image';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const STOCK_PHOTOS = [
  'https://images.unsplash.com/photo-1558035579-a10d04acf787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1558035339-feda573e0d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1528102118331-101a42558c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1305&q=80',
  'https://images.unsplash.com/photo-1531326240216-7b04ad593229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80',
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1618&q=80',
];

const Post = styled.div({
  marginBottom: '1rem',
});

const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, Serif;
  text-transform: lowercase;
  overflow-wrap: break-word;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

const FeatureWrapper = styled.div({
  position: 'relative',
  paddingBottom: '10px',
});

const PublishedAt = styled.div({
  top: '11px',
  left: '-11px',
  display: 'flex',
  zIndex: '1',
  position: 'absolute',
  flexWrap: 'wrap',
  background: '#FB175F',
  color: 'white',
  padding: '0.5rem',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
});

const Footer = styled.ul({
  listStyle: 'none',
  display: 'inline-flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
});

const TagsIcon = styled(FontAwesomeIcon)({
  color: 'gray',
  margin: '0 5px',
});

const Tag = styled.li({
  fontFamily: "'Zilla Slab', serif",
  fontSize: '15px',
  marginRight: '3px',
  textTransform: 'lowercase',
});

const TagLink = styled(Link)`
  padding: 0;

  &:hover {
    background: none;
    color: #fb175f;
  }
`;

const ReadingTime = styled.div({
  fontFamily: "'Homemade Apple', cursive",
  textTransform: 'lowercase',
  fontSize: '0.8rem',
  color: 'gray',
  paddingTop: '10px',
});

const PostCard = ({ post }) => {
  const { id, slug, feature_image, title, published_at_pretty, tags, excerpt } = post;
  return (
    <Post id={id}>
      <Link href={`/${slug}`}>
        <FeatureWrapper>
          <Image
            src={
              feature_image
                ? transformImage(feature_image)
                : STOCK_PHOTOS[Math.floor(Math.random() * 6)]
            }
          />
          <PublishedAt>{published_at_pretty}</PublishedAt>
        </FeatureWrapper>
      </Link>
      <Title>
        <Link href={`/${slug}/`}>{title}</Link>
        <ReadingTime>{readingTimeHelper(post)}</ReadingTime>
      </Title>
      <Footer>
        <TagsIcon icon={['fas', 'tags']} />
        {tags.map(({ id, name, slug: tagSlug }, index) => (
          <Tag key={id}>
            <TagLink href={`/tags/${tagSlug}`}>#{name}</TagLink>
            {index < tags.length - 1 && ', '}
          </Tag>
        ))}
      </Footer>
      {/* <Content>{excerpt}</Content> */}
    </Post>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostCard;
