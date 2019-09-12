import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';

import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../components/common/Link';
import Image from '../components/common/Image';

// NOTE: bring this back when i figure out pagination :(
// const styles = {
//   pageLinks: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     listStyle: 'none',
//     padding: 0,
//     margin: '10px 1rem',

//     '& svg': {
//       height: '28px',
//       marginRight: 0,
//     },

//     '& a': {
//       lineHeight: '28px',
//     },

//     '@media screen and (max-width: 600px)': {
//       flexFlow: 'column',
//       padding: '1rem 0',
//       margin: '0',
//       justifyContent: 'unset',
//       alignItems: 'unset',
//     },
//   },
//   prevLink: {
//     paddingRight: '15px',

//     '@media screen and (max-width: 600px)': {
//       paddingRight: '0',
//     },
//   },
//   nextLink: {
//     textAlign: 'right',

//     '& svg': {
//       marginLeft: '5px',

//       '@media screen and (max-width: 960px)': {
//         marginLeft: '0',
//       },
//     },

//     '@media screen and (max-width: 960px)': {
//       alignSelf: 'flex-end',
//     },
//   },
// };

const PostWrapper = styled.div({
  marginBottom: '1rem'
});

const Title = styled.h1({
  fontFamily: "'Homemade Apple', cursive",
  textTransform: 'capitalize',
  overflowWrap: 'break-word',
  fontSize: '2rem',
  lineHeight: '3rem',

  '@media screen and (max-width: 960px)': {
    fontSize: '1.6rem',
    lineHeight: '2.5rem',
  },
});

const Content = styled.section({
  overflowWrap: 'break-word',
  fontSize: '1rem',

  '@media screen and (max-width: 960px)': {
    fontSize: '1.1rem',
  },

  '& figure': {
    display: 'flex',
    justifyContent: 'center',

    '@media screen and (max-width: 960px)': {
      marginStart: 0,
      '-webkit-margin-start': 0,
      marginEnd: 0,
      '-webkit-margin-end': 0,
    },
  },
  '& blockquote': {
    display: 'block',
    borderWidth: '2px 0',
    borderStyle: 'solid',
    borderColor: 'rgb(255,236,150, .75)',
    padding: '1.5em 0',
    margin: '2em 0',
    position: 'relative',
    textAlign: 'center',
  },
  '& blockquote:before': {
    content: 'open-quote',
    position: 'absolute',
    top: '0em',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '3rem',
    height: '2rem',
    font: '6em/1.08em "PT Sans", sans-serif',
    color: '#666',
    textAlign: 'center',
  },
  '& blockquote.instagram-media:before': {
    content: 'none',
  },
});

const FeatureWrapper = styled.div({
  position: 'relative',
});

const TagList = styled.ul({
  listStyle: 'none',
  display: 'inline-flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
});

const TagsIcon = styled(FontAwesomeIcon)({
  color: 'gray',
  margin: '0 5px',
});

const Tag = styled.li({
  fontFamily: "'Homemade Apple', cursive",
  fontSize: '15px',
  marginRight: '3px',
  textTransform: 'lowercase',
});

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
  const page = data.ghostPost;
  const { codeinjection_styles, title, feature_image, html, tags } = page;

  return (
    <>
      <MetaData data={data} location={location} type="website" />
      <Helmet>
        <style type="text/css">{`${codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <PostWrapper>
          <Title>{title}</Title>
          {tags.length > 0 && (
            <TagList>
              <TagsIcon icon={['fas', 'tags']} />
              {tags.map(({ id, name, slug }, index) => (
                <Tag key={id}>
                  <Link href={`/tags/${slug}`}>#{name}</Link>
                  {index < tags.length - 1 && ', '}
                </Tag>
              ))}
            </TagList>
          )}
          {feature_image && <FeatureWrapper><Image src={feature_image} /></FeatureWrapper>}
          <Content
            className='external-scripts'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </PostWrapper>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
