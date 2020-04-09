/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from '@chakra-ui/core';

import { Layout, PostCard, MainPostCard } from '../components/common';
import { MetaData } from '../components/common/meta';
import Link from '../components/common/Link';
import bgy from '../assets/bgyl.png';

const SectionWrapper = styled(Box)`
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 375px) {
    /* padding-bottom: 3rem; */
  }
`;

const PostSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1.2rem;
`;

const Title = styled.h2`
  background: url(${bgy}) repeat;
  padding: 10px;
  font-family: 'Playfair Display', Georgia, Serif;
  font-size: 2rem;
  text-transform: capitalize;
`;

const MorePosts = styled(Link)`
  font-size: 1.8rem;
  font-weight: 400;
  padding-top: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fb175f;
`;

const Wrapper = styled(Box)`
  margin: 0 auto;
  padding: 0 1%;
  max-width: ${props => (props.isUnbounded ? '100%' : '30%')};

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 0;
    /* max-width: 45%; */
  }

  @media screen and (max-width: 375px) {
    max-width: 100%;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background: #ffec96;
`;

const Section = ({ title, link, posts: allPosts, shouldLimit = true, moreTitle }) => {
  const posts = shouldLimit ? allPosts.slice(0, 3) : allPosts;
  return (
    <SectionWrapper>
      <Title>
        <Link href={link}>{title}</Link>
      </Title>
      <PostSection className="post-feed">
        {posts.map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <Wrapper key={node.uuid} isUnbounded={false}>
            <PostCard post={node} />
          </Wrapper>
        ))}
      </PostSection>
      <MorePosts href={link}>{moreTitle} ⇢</MorePosts>
      <Divider />
    </SectionWrapper>
  );
};

const MainSection = ({ title, link, posts: allPosts }) => {
  return (
    <SectionWrapper>
      <Title>
        <Link href={link}>{title}</Link>
      </Title>
      <PostSection
        className="post-feed"
        css={css`
          flex-direction: column;
        `}>
        {allPosts.slice(0, 5).map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <Wrapper key={node.uuid} isUnbounded={true}>
            <MainPostCard post={node} />
          </Wrapper>
        ))}
      </PostSection>
      <PostSection className="post-feed">
        {allPosts.slice(6).map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <Wrapper key={node.uuid} isUnbounded={false}>
            <PostCard post={node} />
          </Wrapper>
        ))}
      </PostSection>
      <MorePosts href={link}>More nosh please ⇢</MorePosts>
      <Divider />
    </SectionWrapper>
  );
};

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const Index = ({ data, location, pageContext }) => (
  <>
    <MetaData location={location} />
    <Layout isHome={true}>
      <div className="container">
        <MainSection
          posts={data.latest.edges}
          title="What's new?"
          link={pageContext.nextPagePath}
        />
        {pageContext.pageNumber === 0 && (
          <>
            <Section
              posts={data.desserts.edges}
              title="Sugar Rush"
              link="desserts"
              moreTitle="Get in my belly"
            />
            <Section
              posts={data.vegetarian.edges}
              title="Herbivores"
              link="herbivores"
              moreTitle="Feed me"
            />
          </>
        )}
      </div>
    </Layout>
  </>
);

Index.propTypes = {
  data: PropTypes.shape({
    latest: PropTypes.object.isRequired,
    desserts: PropTypes.object.isRequired,
    vegetarian: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string.isRequired,
  }),
};

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    latest: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    vegetarian: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: "herbivores" } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    desserts: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: "desserts" } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    drinks: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: "giggle-juice" } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
