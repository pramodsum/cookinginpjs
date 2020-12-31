import React from 'react';
import { InternalLink } from './Link';
import styled from '@emotion/styled';
import { PageContext } from '../../utils/types';

const Nav = styled.nav({
  alignSelf: 'flex-end',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: '1rem 0',
  fontFamily: "'Srisakdi', cursive",
  fontSize: '1.2rem',
});

type PaginationProps = {
  pageContext: PageContext;
};

const Pagination: React.FC<PaginationProps> = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <Nav role="navigation">
      <div>
        {previousPagePath && (
          <InternalLink to={previousPagePath} rel="prev">
            ← Back it up
          </InternalLink>
        )}
      </div>
      <div>
        {nextPagePath && (
          <InternalLink to={nextPagePath} rel="next">
            Thank you, next →
          </InternalLink>
        )}
      </div>
    </Nav>
  );
};
export default Pagination;
