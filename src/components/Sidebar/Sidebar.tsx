import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
// import AdSense from 'react-adsense';
import InstaFeed from './InstaFeed';
import SocialLinks from '../common/SocialLinks';
import AboutMini from './AboutMini';
// import Link from '../common/Link';
// import bgy from '../../assets/bgyl.png';

const Wrapper = styled(Box)({
  flex: '0 0 300px',
  textAlign: 'center',
  padding: '2rem 0 2rem 2rem',
  '@media screen and (max-width: 960px)': {
    display: 'none',
  },
});

// input: {
//   margin: '1rem 0',
// },
// inputLabel: {
//   fontFamily: "'Homemade Apple', cursive",
//   lineHeight: 2,
// },
// inputFocused: {
//   '&:after': {
//     borderBottomColor: '#FFEC96',
//   },
// },
// const PatreonLink = styled(Link)({
//   background: `url(${bgy}) repeat`,
//   padding: '30px',
//   margin: '10px auto 20px',
//   border: 'black 1px dotted',
//   borderRadius: '4px',
//   fontSize: '1.25rem',
//   fontWeight: '400',
//   lineHeight: '21px',
//   textTransform: 'uppercase',
//   letterSpacing: '.1em',
//   '&:hover': {
//     fontWeight: '900',
//     border: 'black 1px solid',
//   },
// });

const Sidebar: React.FC = () => (
  <Wrapper>
    <AboutMini />
    <SocialLinks />
    <InstaFeed />
  </Wrapper>
);

export default Sidebar;
