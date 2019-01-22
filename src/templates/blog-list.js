import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from '../components/Layout'
import PostList from "../components/PostList/PostList";

const BlogList = ({ location, pageContext, data }) => {
    const posts = get(data, 'allGhostPost.edges');
    const siteTitle = get(data, 'site.siteMetadata.title');
    const siteDescription = get(data, 'site.siteMetadata.description');
    const siteUrl = get(data, 'site.siteMetadata.siteUrl');

    return (
        <Layout 
            location={location} 
            title={siteTitle}
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
        >
            <PostList pageContext={pageContext} posts={posts} siteUrl={siteUrl} />
        </Layout>
    )
}

export default BlogList;

export const blogListQuery = graphql`
query PaginationQuery($skip: Int!, $limit: Int!) {
    site {
        siteMetadata {
            title
            siteUrl
            description
        }
    }
    allGhostPost(
        sort: { order: DESC, fields: [published_at] }
        limit: $limit
        skip: $skip
    ) {
        edges {
            node {
                id
                uuid
                title
                url
                published_at(formatString: "DD MMMM, YYYY")
                markdown
                feature_image: image
                tags {
                    id,
                    name,
                    slug,
                }
            }
        }
    }
}
`
