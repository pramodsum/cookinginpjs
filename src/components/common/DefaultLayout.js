import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import styled from '@emotion/styled';

import Link from './Link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faComments, faBars, faTimes, faTags } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import Main from './Main';
import Header from './Header';

library.add(faFacebookSquare);
library.add(faInstagram);
library.add(faTwitterSquare);
library.add(faEnvelope);
library.add(faHeart);
library.add(faBars);
library.add(faTimes);
library.add(faComments);
library.add(faTags);

const HomeContainer = styled.div`
  background: white;
  max-width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`;

const Footer = styled.footer`
  font-family: 'Zeyada', cursive;
  font-size: 1.2rem;
  text-align: center;
  justify-self: flex-end;
  padding: 1rem 0;
  margin: 0 3rem;
  border-top: 1px solid lightgray;

  @media screen and (max-width: 960px) {
    margin: 0 2rem;
  }
`;

const Heart = styled.small`
  font-size: 10px;
`;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      shouldShrinkHeader: false,
    };
  }

  onResize = e => {
    const target = e.nativeEvent.target;
    if (target.scrollTop > 100) {
      this.setState({ shouldShrinkHeader: true });
    } else {
      this.setState({ shouldShrinkHeader: false });
    }
  };

  render() {
    const { data, children, showSidebar = true } = this.props;
    const { shouldShrinkHeader } = this.state;
    const site = data.allGhostSettings.edges[0].node;

    return (
      <HomeContainer>
        <Helmet title={site.title} defer={false}>
          <html lang={site.lang} />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `(window.adsbygoogle = window.adsbygoogle || []).push({});`,
            }}></script> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i|Homemade+Apple|Zeyada|Roboto+Slab:100,300,400,700"
          />
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,String.prototype.repeat,Array.prototype.find,Array.prototype.findIndex,Math.trunc" />
        </Helmet>
        <Header title={site.title} collapsed={shouldShrinkHeader} />
        <MainWrapper onScroll={this.onResize}>
          {showSidebar ? <Main>{children}</Main> : <div>{children}</div>}
        </MainWrapper>
        <Footer>
          <div>
            Made with <Heart>♡</Heart> by{` `}
            <Link href="https://github.com/pramodsum">Sumedha</Link>
          </div>
        </Footer>
      </HomeContainer>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  isHome: PropTypes.bool,
  data: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
};

export default DefaultLayout;
