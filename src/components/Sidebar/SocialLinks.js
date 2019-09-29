import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

import bgy from '../../assets/bgyl.png';
import Link from '../common/Link';

const MAIL_URL = 'mailto:hello@cookinginpjs.com';
const INSTAGRAM_URL = 'https://www.instagram.com/cookinginpjs/';
const FACEBOOK_URL = 'https://www.facebook.com/wearecookinginpjs/';
const TWITTER_URL = 'https://www.twitter.com/cookinginpjs/';

const SocialWrapper = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
});

const FaIcon = styled(FontAwesomeIcon)({
  padding: '10px',
  display: 'block',
  transition: '.25s ease-in-out',

  '&:hover': {
    background: `url(${bgy}) repeat`,
  },
});

const SocialLinks = () => (
  <SocialWrapper>
    <Link href={INSTAGRAM_URL}>
      <FaIcon icon={['fab', 'instagram']} size="2x" />
    </Link>
    <Link href={FACEBOOK_URL}>
      <FaIcon icon={['fab', 'facebook-square']} size="2x" />
    </Link>
    <Link href={TWITTER_URL}>
      <FaIcon icon={['fab', 'twitter-square']} size="2x" />
    </Link>
    <Link href={MAIL_URL}>
      <FaIcon icon={['far', 'envelope']} size="2x" />
    </Link>
  </SocialWrapper>
);

export default SocialLinks;
