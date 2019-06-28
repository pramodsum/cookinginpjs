import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { graphql } from 'gatsby'
import CardMedia from '@material-ui/core/CardMedia';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles';

import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';

const styles = theme => ({
    title: {
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        fontSize: '3rem',
        lineHeight: '5rem',
        marginTop: '1.5rem',
        marginBottom: '0',

        '@media screen and (max-width: 960px)': {
            fontSize: '2rem',
            lineHeight: '3rem',
            margin: '0',
        },
    },
    img: {
        height: 0,
        paddingTop: '100%',
        margin: '1rem 0',
        width: '100%',
        transition: 'opacity .4s',
        maxHeight: '500px',

        '&:hover': {
            opacity: '.75'
        }
    },
    content: {
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
                '-webkit-margin-end': 0
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
            textAlign: 'center'
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
    },
    footer: {
        listStyle: 'none',
        display: 'inline-flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
        fontSize: '15px',
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginRight: '10px'
    },
    tag: {
        fontFamily: "'Homemade Apple', cursive",
        fontSize: '13px',
        marginRight: '3px',
        textTransform: 'lowercase',
    },
    pageLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: '10px 1rem',

        '& svg': {
            height: '28px',
            marginRight: 0
        },

        '& a': {
            lineHeight: '28px'
        },

        '@media screen and (max-width: 600px)': {
            flexFlow: 'column',
            padding: '1rem 0',
            margin: '0',
            justifyContent: 'unset',
            alignItems: 'unset',
        },
    },
    link: {
        display: 'flex',
        fontFamily: "'Homemade Apple', cursive",
        lineHeight: '1',
        fontSize: '1rem',
        fontWeight: '400',
        paddingRight: '10px',
    },
    prevLink: {
        paddingRight: '15px',

        '@media screen and (max-width: 600px)': {
            paddingRight: '0'
        },
    },
    nextLink: {
        textAlign: 'right',

        '& svg': {
            marginLeft: '5px',

            '@media screen and (max-width: 960px)': {
                marginLeft: '0',
            },
        },

        '@media screen and (max-width: 960px)': {
            alignSelf: 'flex-end',
        },
    },
});

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location, classes }) => {
    const page = data.ghostPost;
    const { codeinjection_styles, title, feature_image, html, tags } = page;

    return (
      <>
          <MetaData
              data={data}
              location={location}
              type="website"
          />
          <Helmet>
              <style type="text/css">{`${codeinjection_styles}`}</style>
          </Helmet>
          <Layout>
              <article className={classes.post}>
                  <h1 className={classes.title}>{title}</h1>
                  { tags.length > 0 &&
                      <ul className={classes.footer}>
                          <LoyaltyOutlined className={classes.icon} />
                          { tags.map(({ id, name, slug }, index) => (
                              <li key={id} className={classes.tag}>
                                  <a href={`/tags/${slug}`}>#{name}</a>
                                  { index < tags.length - 1 && ', ' }
                              </li>
                          ))}
                      </ul>
                  }
                  { feature_image &&
                      <Paper><CardMedia className={classes.img} image={feature_image} /></Paper>
                  }
                  <section
                      className={`${classes.content} load-external-scripts`}
                      dangerouslySetInnerHTML={{ __html: html }}
                  />
              </article>
          </Layout>
      </>
    )
}

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
}

export default withStyles(styles, { withTheme: true })(Post);

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
