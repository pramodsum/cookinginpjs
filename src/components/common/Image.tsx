import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
import { media } from '../../utils/mediaBreakpoints';

const Wrapper = styled(Box)<{ showBorder?: boolean; size?: string }>`
  background: white;
  border-radius: 4px;
  box-shadow: ${props =>
    props.showBorder &&
    `0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12)`};
  position: relative;
  height: ${props => (props.size ? `${props.size}` : '100%')};
  width: ${props => (props.size ? `${props.size}` : '100%')};

  ${media.smallerThan.XS} {
    width: 100%;
    height: auto;
  }
`;

const Image = styled(Box)<{ src: string }>`
  display: block;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  object-fit: cover;
  height: 0;
  padding-top: 100%;
  max-height: 500px;
  transition: opacity 0.4s;
  position: relative

  "&:hover" {
    opacity: 0.5;
  }
`;

type ImgProps = {
  wrapperSize?: string;
  size?: string;
  src: string;
  showBorder?: boolean;
};

const Img: React.FC<ImgProps> = ({ wrapperSize, showBorder = true, ...rest }) => (
  <Wrapper size={wrapperSize} showBorder={showBorder}>
    <Image as="image" {...rest} />
  </Wrapper>
);

export const BackgroundImage = styled(Img)({
  backgroundSize: 'contain',
});

export default Img;
