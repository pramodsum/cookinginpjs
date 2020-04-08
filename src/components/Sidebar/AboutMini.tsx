import React from 'react';
import styled from '@emotion/styled';
import Header from '../common/AboutHeader';

const Wrapper = styled.p({
  fontSize: '0.9rem',
});

const Emphasized = styled.p({
  // fontFamily: "'Homemade Apple', cursive",
  fontSize: '.9rem',
});

const AboutMini: React.FC = () => (
  <div>
    <Header />
    <Wrapper>
      We've known each other pretty much forever, and this blog is our way of documenting our
      culinary exploits, and some non-culinary exploits as well. We're not always on the same page,
      or in the same state, or even on the same continent, but two things are generally true:{' '}
    </Wrapper>
    <Emphasized>At least one of us is not paying attention</Emphasized>
    <Emphasized>At least one of us is wearing her pajamas</Emphasized>
  </div>
);

export default AboutMini;
