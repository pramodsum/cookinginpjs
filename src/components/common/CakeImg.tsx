import React from 'react';
import { Box } from '@chakra-ui/core';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

// @ts-ignore
import candle from '../../assets/candle.png';
import Img from './Image';

export type CakeVariant = {
  size: string;
  frosting: string;
  layer: string;
};

const frostings: object = {
  Chocolate: '#84563c',
  Mocha: '#a68966',
  Strawberry: '#fcd2df',
  'Vanilla Buttercream': '#f9f3d3',
  'Whipped Cream': '#f4ece8',
  'Cream Cheese': '#f3efe1',
  'Salted Caramel': '#ebb57d',
  'Cereal Milk': '#e9e1df',
  Lemon: '#ffcf00',
};

const sizes: object = {
  '6" round': 120,
  '8" round': 160,
  '10" round': 200,
  '9x9" square': 180,
  '9" specialty bundt': 180,
  '24 cupcakes': 48,
};

const cakeFlavors: object = {
  'Chocolate Cake': '#3c1321',
  'Cardamom Spiced Cake': '#e0ad67',
  'Carrot Cake': '#dc8c59',
  'Cereal Milk Cake': '#efe2cb',
  'Chocolate Whiskey Cake': '#3c1321',
  'Cinnamon Spiced Cake': '#d2806c',
  'Confetti Cake': '#e6798e',
  'Lemon Cake': '#feee91',
  'Mocha Cake': '#b49681',
  'Old Fashioned Cake': '#6f5242',
  'Pumpkin Spiced Cake': '#d88b4c',
  'Red Velvet Cake': '#86242a',
  'Strawberry Cake': '#a66177',
  'Vanilla Cake': '#f5eabc',
};

const bounceInTop = keyframes`
 0% {
   -webkit-transform: translateY(-200px);
           transform: translateY(-200px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
   opacity: 0;
 }
 38% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
   opacity: 1;
 }
 55% {
   -webkit-transform: translateY(-55px);
           transform: translateY(-55px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 72% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 81% {
   -webkit-transform: translateY(-28px);
           transform: translateY(-28px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 90% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
 }
 95% {
   -webkit-transform: translateY(-8px);
           transform: translateY(-8px);
   -webkit-animation-timing-function: ease-in;
           animation-timing-function: ease-in;
 }
 100% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-animation-timing-function: ease-out;
           animation-timing-function: ease-out;
  }
`;

const fallingSprinkle = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0px) rotateZ(0deg);
    -webkit-transform: translate(0, 0px) rotateZ(0deg);
  }
  75% {
    opacity: 1;
    transform: translate(100px, 175px) rotateZ(270deg);
    -webkit-transform: translate(100px, 175px) rotateZ(270deg);
  }
  100% {
    opacity: 0;
    transform:  translate(150px, 200px) rotateZ(360deg);
    -webkit-transform: translate(150px, 200px) rotateZ(360deg);
  }
`;

const Sprinkle = styled.span`
  background-color: pink;
  border-radius: 3px;
  width: 5px;
  height: 15px;
  margin: 0px 40px 54px 0px;

  -webkit-animation: ${fallingSprinkle} 3s infinite linear;
  animation: ${fallingSprinkle} 3s infinite linear;

  &:nth-child(5n + 5) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  &:nth-child(3n + 2) {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }

  &:nth-child(2n + 5) {
    -webkit-animation-delay: 1.7s;
    animation-delay: 1.7s;
  }
`;

type LayerProps = {
  flavor: string;
  width: string;
  delay: number;
  boxShadow?: string;
};

const Layer = styled(Box)<LayerProps>`
  width: ${props => props.width}px;
  box-shadow: ${props => props.boxShadow || '0.5vh 0.5vh 0 rgba(0, 0, 0, 0.25)'};
  -webkit-animation: ${bounceInTop} 1s both;
  animation: ${bounceInTop} 1s both;
  animation-delay: ${props => props.delay}s;
  background-color: ${props => props.flavor};
  border-radius: 3px;
`;

const FrostingLayer: React.FC<LayerProps> = ({ flavor, ...props }) => (
  <Layer {...props} height="10px" flavor={frostings[flavor]} />
);

const CakeLayer: React.FC<LayerProps> = ({ flavor, ...props }) => (
  <Layer {...props} height="35px" flavor={cakeFlavors[flavor || 'Strawberry']} />
);

const Cake: React.FC<{ cakeWidth: number }> = ({ children, cakeWidth }) => (
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    {children}
    <Layer
      delay={0}
      width={`${cakeWidth + 40}px`}
      height="5px"
      flavor="#fff"
      boxShadow=".5vh .5vh 0 rgba(0, 0, 0, 0.25)"
    />
  </Box>
);

const Candle: React.FC<Partial<LayerProps>> = ({ delay }) => (
  <Layer width="50" flavor="transparent" delay={delay} boxShadow="transparent" mb={-3}>
    <img data-pin-nopin="true" src={candle} />
  </Layer>
);

const CakeImg: React.FC<{ cakeFlavor: string; variant: CakeVariant }> = ({
  cakeFlavor,
  variant,
}) => {
  const numLayers =
    variant.layer === 'Single' ||
    variant.size === '24 cupcakes' ||
    variant.size === '9" specialty bundt'
      ? 1
      : 2;
  const cakeWidth = sizes[variant.size];
  const sprinkles: any[] = new Array(20).fill(0);
  console.log(sprinkles);

  return (
    <Cake cakeWidth={cakeWidth || 160}>
      {numLayers > 0 && (
        <>
          {numLayers > 1 && variant.frosting && (
            <>
              <Candle delay={1.25} />
              <FrostingLayer delay={1} width={cakeWidth} flavor={variant.frosting} />
              <CakeLayer delay={0.75} width={cakeWidth} flavor={cakeFlavor} />
              <FrostingLayer delay={0.5} width={cakeWidth} flavor={variant.frosting} />
              <CakeLayer delay={0.25} width={cakeWidth} flavor={cakeFlavor} />
            </>
          )}
          {numLayers === 1 && (
            <>
              {cakeWidth && !variant.frosting && <Candle delay={0.5} />}
              {variant.frosting && (
                <>
                  <Candle delay={0.5} />
                  <FrostingLayer delay={0.25} width={cakeWidth} flavor={variant.frosting} />
                </>
              )}
              {cakeWidth && <CakeLayer delay={0.25} width={cakeWidth} flavor={cakeFlavor} />}
            </>
          )}
        </>
      )}
    </Cake>
  );
};

export default CakeImg;
