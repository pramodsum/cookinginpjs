import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import get from 'lodash/get'

import Layout from '../components/Layout'
import PostList from "../components/PostList/PostList";

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    render() {
        const { location, pageContext, data } = this.props;
        const posts = get(data, 'allGhostPost.edges');
        const siteTitle = get(data, 'site.siteMetadata.title');
        const siteDescription = get(data, 'site.siteMetadata.description');
        const siteUrl = get(data, 'site.siteMetadata.siteUrl');

        return (
            <Layout location={location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <PostList pageContext={pageContext} posts={posts} siteUrl={siteUrl} />
            </Layout>
        )
    }
}

export default TagList;

export const tagListQuery = graphql`
query TagPaginationQuery($skip: Int!, $limit: Int!, $tag: String!) {
  site {
    siteMetadata {
      title
      siteUrl
      description
    }
  }
  allGhostPost(
    sort: { order: DESC, fields: [published_at] }
    filter: { tags: { elemMatch: { name: { eq: $tag }} } }
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
