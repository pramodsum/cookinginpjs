import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
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

const Title = styled.h1<{ collapsed?: boolean }>`
  font-size: ${props => (props.collapsed ? '5rem' : '6rem')};
  letter-spacing: ${props => (props.collapsed ? '-1px' : '-3px')};
  margin: 0;

  & a {
    padding: 0 30px;
  }

  & a:hover {
    background: url(${bgy}) repeat;
  }

  @media screen and (max-width: 960px) {
    font-size: 5rem;
    letter-spacing: -1px;
    text-align: center;

    & a {
      padding: 0;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 3.75rem;
    letter-spacing: -2px;
    padding: 0 2rem;
  }
`;

const Subtitle = styled.h3<{ collapsed?: boolean }>`
  font-size: 1.15rem;
  font-weight: 300;
  color: gray;
  font-family: 'Homemade Apple', cursive;
  margin: ${props => (props.collapsed ? '10px 0 5px' : '30px 0 15px')};

  @media screen and (max-width: 960px) {
    font-size: 1.05rem;
    padding: 0 2rem;
  }
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
export default Header;
