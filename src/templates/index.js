import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout, PostCard, Pagination } from '../components/common';
import { MetaData } from '../components/common/meta';

const PostSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1%;
  max-width: 30%;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0;
    max-width: 45%;
  }

  @media screen and (max-width: 375px) {
    max-width: 100%;
  }
`;

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MetaData location={location} />
      <Layout isHome={true}>
        <div className="container">
          <PostSection className="post-feed">
            {posts.map(({ node }, index) => (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <Wrapper>
                <PostCard key={node.uuid} post={node} />
                {/* {index < posts.length && <Divider />} */}
              </Wrapper>
            ))}
          </PostSection>
          <Pagination pageContext={pageContext} />
        </div>
      </Layout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
