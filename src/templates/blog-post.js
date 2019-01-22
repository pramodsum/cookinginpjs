import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import CardMedia from '@material-ui/core/CardMedia';
import LoyaltyOutlined from '@material-ui/icons/LoyaltyOutlined';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { withStyles } from '@material-ui/core';
import Markdown from 'react-markdown';

import Layout from '../components/Layout'
import divider from '../assets/fork-divider-long.png';

const styles = theme => ({
    title: {
        fontFamily: "'Homemade Apple', cursive",
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        margin: '0',
        fontSize: '3rem',
        lineHeight: '5rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
            lineHeight: '3rem'
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

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
        },
    },
    footer: {
        listStyle: 'none',
        display: 'inline-flex',
        flexWrap: 'wrap',
        padding: 0,
        margin: 0,
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

        [theme.breakpoints.down('xs')]: {
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

        [theme.breakpoints.down('xs')]: {
            paddingRight: '0'
        },
    },
    nextLink: {
        textAlign: 'right',

        '& svg': {
            marginLeft: '5px',

            [theme.breakpoints.down('sm')]: {
                marginLeft: '0',
            },
        },

        [theme.breakpoints.down('sm')]: {
            alignSelf: 'flex-end',
        },
    }
});

class BlogPostTemplate extends React.Component {
    render() {
        const { classes } = this.props;
        const post = get(this.props, 'data.ghostPost')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        const siteDescription = get(this.props, 'data.site.siteMetadata.description')
        const { previous, next } = this.props.pageContext

        const { id, slug, title, feature_image, markdown, tags } = post;

        return (
            <Layout 
                location={this.props.location} 
                title={siteTitle}
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
            >
                <article className={classes.post}>
                    <h1 className={classes.title}>{title}</h1>
                    <ul className={classes.footer}>
                        <LoyaltyOutlined className={classes.icon} />
                        { tags.map(({ id, name, slug }, index) => (
                            <li key={id} className={classes.tag}>
                                <a href={`/tags/${slug}`}>#{name}</a>
                                { index < tags.length - 1 && ', ' }
                            </li>
                        ))}
                    </ul>
                    { feature_image && 
                        <Paper><CardMedia className={classes.img} image={feature_image} /></Paper>
                    }
                    <Markdown 
                        className={classes.content} 
                        source={markdown} 
                        skipHtml={true}
                    />
                </article>
                <img className={classes.divider} src={divider} />
                <ul className={classes.pageLinks}>
                    { previous && <div className={`${classes.link} ${classes.prevLink}`}>
                        <ArrowBackIos className={classes.icon} />
                        <li >
                            <Link to={previous.slug} rel="prev">{previous.title}</Link>
                        </li>
                    </div>}
                    { next && 
                    <div className={`${classes.link} ${classes.nextLink}`}>
                        <li>
                            <Link to={next.slug} rel="next">{next.title}</Link>
                        </li>
                        <ArrowForwardIos className={classes.icon} />
                    </div>}
                </ul>
            </Layout>
        )
    }
}

export default withStyles(styles, { withTheme: true })(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image: image
      published_at(formatString: "DD MMMM, YYYY")
      markdown,
      tags {
        id,
        name,
        slug,
      }
    }
  }
`
