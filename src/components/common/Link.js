import styled from '@emotion/styled';
import bgy from '../../assets/bgyl.png';
import { Link } from 'gatsby';

const LinkStyles = {
  padding: '8px 0',

  '&:hover': {
    background: `url(${bgy}) repeat`,
  },
};

export const InternalLink = styled(Link)(LinkStyles);

export default styled.a(LinkStyles);
