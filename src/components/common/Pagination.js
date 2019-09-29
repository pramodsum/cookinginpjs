import React from 'react';
import PropTypes from 'prop-types';
import { InternalLink } from './Link';
import styled from '@emotion/styled';

const Nav = styled.nav({
  alignSelf: 'flex-end',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  fontFamily: "'Homemade Apple', cursive",
  fontSize: '1.2rem',
});

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  return (
    <Nav role="navigation">
      <div>
        {previousPagePath && (
          <InternalLink to={previousPagePath} rel="prev">
            ← Back it up
          </InternalLink>
        )}
      </div>
      {numberOfPages > 1 && (
        <div className="pagination-location">
          Page {humanPageNumber} of {numberOfPages}
        </div>
      )}
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

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
