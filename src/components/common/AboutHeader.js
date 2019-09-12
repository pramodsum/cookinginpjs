import React from 'react';
import styled from '@emotion/styled';

import profileImg from '../../assets/about.jpg';
import Link from './Link';
import Image from './Image';

const Img = styled(Image)`
  border-radius: 50%;
`;

const Title = styled.h3`
  font-family: 'Homemade Apple', cursive;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const SUMU_EMAIL = `mailto:sumu@cookinginpjs.com`;
const ANU_EMAIL = `mailto:anu@cookinginpjs.com`;

const AboutHeader = () => (
  <>
    <Img showBorder={false} src={profileImg} />
    <Title>Hello and welcome!</Title>
    <Subtitle>
      We're <Link href={SUMU_EMAIL}>Sumu</Link> & <Link href={ANU_EMAIL}>Anu</Link>.
    </Subtitle>
  </>
);

export default AboutHeader;