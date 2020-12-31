import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading } from '@chakra-ui/core';
import { InternalLink } from './Link';
import Menu from '../Menu/Menu';
// @ts-ignore
import bgy from '../../assets/bgyl.png';

const Wrapper = styled.header<{ collapsed?: boolean }>`
  font-family: 'Playfair Display', Georgia, Serif;
  background: white;
  color: black;
  word-break: break-word;
  text-align: center;
  padding: ${props => (props.collapsed ? '2rem 2rem 0' : '1rem 1rem 0')};

  @media screen and (max-width: 960px) {
    padding: 2rem 0 0;
  }

  @media screen and (max-width: 600px) {
    padding-top: 1rem;
  }
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

type HeaderProps = {
  title: string;
  collapsed?: boolean;
};

class Header extends React.Component<HeaderProps> {
  render() {
    const { title, collapsed = false } = this.props;
    return (
      <Wrapper collapsed={collapsed}>
        <Container>
          <Title collapsed={collapsed}>
            <InternalLink to={'/'}>{title}</InternalLink>
          </Title>
          <Subtitle collapsed={collapsed}>
            Stories and Musings from Wayfaring Adventurers and Aspiring Home Cooks.
          </Subtitle>
          <Menu collapsed={collapsed} />
        </Container>
      </Wrapper>
    );
  }
}

const HeadingWithLinks = styled(Heading)`
  & a {
    padding: 0 30px;
  }

  & a:hover {
    background: url(${bgy}) repeat;
  }

  @media screen and (max-width: 960px) {
    & a {
      padding: 0;
    }
  }
`;

const Title: React.FC<{ collapsed?: boolean }> = ({ collapsed, ...props }) => (
  <HeadingWithLinks
    as="h1"
    fontFamily="'Playfair Display', Georgia, Serif"
    fontSize={['2rem', '3.75rem', '5rem']}
    letterSpacing={'-1px'}
    my={[0, 3]}
    {...props}
  />
);


const Subtitle: React.FC<{ collapsed?: boolean }> = ({ collapsed, ...props }) => (
  <Heading fontFamily="'Homemade Apple', cursive" color="dimgray" mt={collapsed ? '10px' : '30px'} mb={collapsed ? '5px' : '15px'} display={['none', 'block'] }fontSize={ ['1rem', '1.15rem']} fontWeight="lighter" {...props} />
);

export default Header;
