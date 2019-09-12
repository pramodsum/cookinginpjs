import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  pageLinks: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    fontFamily: "'Homemade Apple', cursive",
    fontSize: '1.2rem',
  },
};

const Pagination = ({ classes, pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  return (
    <nav className={classes.pageLinks} role="navigation">
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} rel="prev">
            ← Back it up
          </Link>
        )}
      </div>
      {numberOfPages > 1 && (
        <div className="pagination-location">
          Page {humanPageNumber} of {numberOfPages}
        </div>
      )}
      <div>
        {nextPagePath && (
          <Link to={nextPagePath} rel="next">
            Thank you, next →
          </Link>
        )}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
