import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

import bgy from '../assets/bgyl.png'

const styles = theme => ({
    title: {
        textTransform: 'capitalize',
        overflowWrap: 'break-word',
        fontFamily: "'Playfair Display', Georgia, Serif",
        wordBreak: 'break-word',
        textAlign: 'center',
        marginTop: '1rem',
        borderBottom: '1px dotted black',
        paddingTop: '0.5rem',
        paddingBottom: '1rem',

        '& h1': {
          fontSize: '3rem',
          margin: '0',
        },
    },
});

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext, classes }) => {
    const tag = data.ghostTag
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="series"
            />
            <Layout>
                <div>
                    <header className={classes.title}>
                        <h1>{tag.name}</h1>
                    </header>
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Tag.propTypes = {
    data: PropTypes.shape({
        ghostTag: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(Tag);

export const pageQuery = graphql`
    query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
        ghostTag(slug: { eq: $slug }) {
            ...GhostTagFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
