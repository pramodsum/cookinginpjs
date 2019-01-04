import React from "react"
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"
import get from 'lodash/get'
import { withStyles } from '@material-ui/core';

import Layout from '../components/Layout'
import MiniPost from '../components/Post/MiniPost';

const styles = theme => ({
    pageLinks: {
        alignSelf: 'flex-end',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
        margin: '10px 1rem'
    }
});

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    determineHeight() {

    }

    render() {
        const { classes, location, pageContext, data } = this.props;
        const posts = get(data, 'allGhostPost.edges');
        const siteTitle = get(data, 'site.siteMetadata.title');
        const siteDescription = get(data, 'site.siteMetadata.description');

        const { currentPage, numPages } = pageContext;
        const isFirst = currentPage === 1;
        const isLast = currentPage === numPages;
        const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
        const nextPage = (currentPage + 1).toString();

        return (
            <Layout location={location} title={siteTitle}>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={siteTitle}
                />
                <div className={classes.list}>
                    {
                        posts.map(({ node }) => <MiniPost {...node}  key={node.uuid} />)
                    }
                </div>
                <ul className={classes.pageLinks}>
                    <li>{
                        !isFirst &&
                        <Link to={prevPage} rel="prev">← Previous Page</Link>
                    }</li>
                    <li>{
                        !isLast &&
                        <Link to={nextPage} rel="next">Next Page →</Link>
                    }</li>
                </ul>
            </Layout>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BlogList);

export const blogListQuery = graphql`
query PaginationQuery($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
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
        slug
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
