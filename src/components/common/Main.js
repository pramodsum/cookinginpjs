import React from 'react';
import styled from '@emotion/styled';

import Sidebar from '../Sidebar/Sidebar';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 3rem 1rem;

  @media screen and (max-width: 960px) {
    padding: 0 2rem 1rem;
  }
`;
const Content = styled.div`
  width: 100%;
  padding-right: 2rem;

  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`;

const Main = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
    <Sidebar />
  </Wrapper>
);

export default Main;
