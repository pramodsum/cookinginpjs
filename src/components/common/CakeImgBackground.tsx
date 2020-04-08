import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const Sprinkle = styled(Box)`
  position: relative;
  border-radius: 100vh;
  z-index: 100;
  animation: bounce-in-sprinkles 0.5s forwards;
  box-shadow: 1vh 1vh 0 rgba(0, 0, 0, 0.25);
  background-color: #fb175f;
  height: 3.66667vh;
  width: 1vh;
`;

const CakeImgBackground: React.FC = ({ children }) => (
  <Box
    width="350px"
    mr={6}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="5px"
    backgroundColor="#c6beff">
    {/* <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(-60deg)" top="70%" left="67%" />
    <Sprinkle transform="rotate(10deg)" top="20%" left="44%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" /> */}
    {children}
  </Box>
);

export default CakeImgBackground;
