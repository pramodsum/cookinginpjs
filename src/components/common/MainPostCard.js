import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Image from './Image';
import Link from './Link';
import transformImage from '../../utils/transformImage';
import {media} from '../../utils/mediaBreakpoints'

const STOCK_PHOTOS = [
  'https://images.unsplash.com/photo-1558035579-a10d04acf787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1558035339-feda573e0d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1528102118331-101a42558c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1305&q=80',
  'https://images.unsplash.com/photo-1531326240216-7b04ad593229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=936&q=80',
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1618&q=80',
];

const Post = styled.div`
  margin-bottom: 1rem;
  display: flex;

  ${media.smallerThan.XS} {
    flex-direction: column;
  }
`;

const PhotoContainer = styled.div`
  padding-right: 20px;

${media.smallerThan.XS} {
  padding-right: 0;
}
`;

const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, Serif;
  text-transform: lowercase;
  overflow-wrap: break-word;
  font-size: 2rem;
  margin: 0;
`;

const FeatureWrapper = styled.div`
  position: relative;
  padding-bottom: 10px;
`;

const Content = styled.div`
  padding: 10px 0;
  word-break: break-word;
  font-size: 1rem;
`;

const MoreLink = styled(Link)`
  margin-top: 10px;
  color: #fb175f;
  font-weight: bolder;
  font-size: 1rem;
`;

const PublishedAt = styled.div`
  font-family: 'Homemade Apple', cursive;
  text-transform: lowercase;
  font-size: 1rem;
  color: gray;
  padding-top: 5px;
`;

const PostCard = ({ post }) => {
  const { id, slug, feature_image, title, published_at_pretty, excerpt } = post;
  return (
    <Post id={id}>
      <PhotoContainer>
        <Link href={`/${slug}`}>
          <FeatureWrapper>
            <Image
              wrapperSize="400px"
              src={
                feature_image
                  ? transformImage(feature_image)
                  : STOCK_PHOTOS[Math.floor(Math.random() * 6)]
              }
            />
          </FeatureWrapper>
        </Link>
      </PhotoContainer>
      <div>
        <Title>
          <PublishedAt>{published_at_pretty}</PublishedAt>
          <Link href={`/${slug}/`}>{title}</Link>
        </Title>
        {excerpt && <Content>{excerpt.slice(0, 350)}...</Content>}
        <MoreLink href={`/${slug}`}>Come with me if you want to eat ⇢</MoreLink>
      </div>
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
