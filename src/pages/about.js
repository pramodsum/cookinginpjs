import React from 'react';
import styled from '@emotion/styled';
// import PropTypes from "prop-types"

import profileImg from '../assets/about.jpg';
import bgy from '../assets/bgyl.png';
import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';
import Image from '../components/common/Image';
import Link from '../components/common/Link';

const SUMU_EMAIL = `mailto:sumu@cookinginpjs.com`;
const ANU_EMAIL = `mailto:anu@cookinginpjs.com`;

const Main = styled.div({
  marginBottom: '1rem',
  overflow: 'scroll',

  '@media (min-width: 768px)': {
    display: 'block',
    alignItems: 'center',
  }
});

const Title = styled.h3({
  fontFamily: "'Homemade Apple', cursive",
  fontSize: '2.5rem',
  margin: 0,
})

const Content = styled.div({
  marginBottom: '2.5rem',
});

const ImageWrapper = styled.div({
  marginBottom: '2.5rem',
  width: '100%',
  margin: 'auto',
})

const Img = styled(Image)`
  border-radius: 50%;
`;

const Salutation = styled.div({
  fontSize: '2rem',
  fontFamily: "'Zedaya', cursive",
  lineHeight: '1rem',
  marginTop: '3rem',
});

const Signature = styled.p({
  fontSize: '2rem',
  fontFamily: "'Homemade Apple', cursive",
  margin: '8px 0',

  '& a': {
    padding: '8px 0',
  },

  '& a:hover': {
    background: `url(${bgy}) repeat`,
  },
}); 

const AboutPage = ({ data, location }) => (
  <>
    <MetaData data={data} location={location} type="profile" />
    <Layout showSidebar={false}>
      <Main>
        <ImageWrapper><Img wrapperSize={250} showBorder={false} src={profileImg} /></ImageWrapper>
        <Content>
          <Title>Hello and welcome!</Title>
          <p>
            They say that poetry is the food of love, but we disagree; food is the food of love.
            Cinnamon buns soothe your stress cut edges, macarons are fluffy-sweet puppy love, and
            nothing says “this is my best friend” like a hilariously botched Jello recipe.
          </p>
          <p>
            We've known each other pretty much forever, and this blog is the ongoing narrative of
            our friendship, which has, by turns, been burnt, crispy, savory, sweet, and decadent.
            These are the tales of our culinary exploits, from figuring out poached eggs (a la Julie
            and Julia) to identifying the right balance of salt and cayenne for South Indian rasam.
            We're not always on the same page, or in the same state, or even on the same continent,
            but two things are generally true: at least one of us is dreaming about food, and at
            least one of us is wearing her pajamas.
          </p>
          <Signature>
            <Salutation>Love, {` `}</Salutation>
            <Link href={SUMU_EMAIL}>Sumu</Link> &{` `}
            <Link href={ANU_EMAIL}>Anu</Link>.
          </Signature>
        </Content>
      </Main>
    </Layout>
  </>
);

export default AboutPage;
