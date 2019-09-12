/** @jss jss */
import {css, jss } from '@emotion/core';
import styled from '@emotion/styled';
import bgy from '../../assets/bgyl.png';
import { Link } from 'gatsby';

const LinkCss = css(`
padding: 8px 0;

&:hover {
  background: url(${bgy}) repeat;
}`);

export const InternalLink = styled(Link)({LinkCss});

export default styled.a({LinkCss});