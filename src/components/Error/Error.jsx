import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import { InternalLink } from '../common/Link';
import { BackgroundImage } from '../common/Image';
import miggy from '../../assets/Miggy.png';
import bgy from '../../assets/bgyl.png';

const Wrapper = styled(Box)({
  justifyContent: 'center',
  padding: '0 2rem 1rem',
  overflowX: 'hidden',

  '@media screen and (max-width: 960px)': {
    textAlign: 'center',
  },
});

const Title = styled.h1({
  fontFamily: "'Zeyada', cursive",
  fontSize: '3rem',
  lineHeight: '1',
  marginBottom: '0',
  marginTop: '0.5rem',
  textTransform: 'capitalize',
  overflowWrap: 'break-word',

  '&:hover': {
    background: `url(${bgy}) repeat`,
  },
});

const Error = () => (
  <Wrapper>
    <Title>Ruh Roh!</Title>
    <div>
      This is not the page you're looking for... the sadness.{' '}
      <InternalLink to="/">Let’s go back home</InternalLink>
    </div>
    <BackgroundImage src={miggy} showBorder={false} />
  </Wrapper>
);

export default Error;
