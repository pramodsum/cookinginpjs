import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

import Image from '../common/Image';
import Link from '../common/Link';

const Post = styled.div({
  position: 'relative',
});

const MiniImage = styled(Image)({
  transition: 'opacity .4s',
  borderRadius: '4px',
  margin: '4px 0',

  '&:hover': {
    opacity: 0.75,
  },
});

const MetaData = styled.div({
  position: 'absolute',
  top: '0',
  height: '100%',
  width: '100%',
  opacity: '0',
  transition: 'opacity 100ms ease',
  display: 'flex',
  fontSize: '1.25rem',

  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bolder',

  '&:hover': {
    opacity: '1',
    background: 'rgba(255,255,255, 0.8)',
  },
});

const Likes = styled(FontAwesomeIcon)({
  color: 'LightCoral',
  margin: '0 5px',
});

const Comments = styled(FontAwesomeIcon)({
  color: 'SlateBlue',
  margin: '0 5px',
});

const InstaPost = ({ images, comments, likes, link }) => {
  return (
    <Post>
      <Link href={link}>
        <MiniImage src={images.thumbnail.url} wrapperSize="148px" />
        <MetaData>
          <Likes icon={['fas', 'heart']} />
          {likes.count}
          <Comments icon={['fas', 'comments']} />
          {comments.count}
        </MetaData>
      </Link>
    </Post>
  );
};

export default InstaPost;
