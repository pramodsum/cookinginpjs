import React from "react"
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"
import get from 'lodash/get'
import { withStyles } from '@material-ui/core';
import ReactDOM from 'react-dom';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  WindowScroller,
  AutoSizer,
  Masonry
} from 'react-virtualized';

import MiniPost from '../components/Post/MiniPost';
import Layout from '../components/Layout'

const styles = {
    pageLinks: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        padding: 0,
    }
};

class BlogList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnCount: 2,
            columnWidth: 200,
            gutterSize: 10,
            height: 300,
            windowScrollerEnabled: false
        };

        this.cache = new CellMeasurerCache({
            defaultHeight: 250,
            defaultWidth: 200,
            fixedWidth: false
        });
  
        this.cellPositioner = createMasonryCellPositioner({
          cellMeasurerCache: this.cache,
          columnCount: this.state.columnCount,
          columnWidth: this.state.columnWidth,
          spacer: this.state.gutterSize,
        });
    }

    calculateColumnCount = () => {
      const { width, columnWidth, gutterSize } = this.state;
  
      this.setState({
          columnCount: Math.floor(width / (columnWidth + gutterSize))
      });
    }

    cellRenderer = ({ index, key, parent, style }) => {
        const { data } = this.props;
        const list = get(data, 'allGhostPost.edges');
        const { node } = list[index];
        
        return (
            <CellMeasurer
                cache={this.cache}
                index={index}
                key={key}
                parent={parent}
            >   
                <MiniPost {...node}  key={node.uuid} />
            </CellMeasurer>
        );
    }

    onResize = ({width}) => {
        this.setState({ width });
        this.calculateColumnCount();
        this.resetCellPositioner();
        this.masonry.recomputeCellPositions();
    }
  
    resetCellPositioner = () => {
      const { columnCount, columnWidth, gutterSize } = this.state;
  
      this.cellPositioner.reset({
        columnCount: columnCount,
        columnWidth,
        spacer: gutterSize,
      });
    }

    renderAutoSizer = ({height, scrollTop}) => {
      this.setState({ height, scrollTop });
  
      return (
        <AutoSizer
            disableHeight
            height={height}
            onResize={this.onResize}
            overscanByPixels={0}
            scrollTop={scrollTop}
        >
            {this.renderMasonry}
        </AutoSizer>
      );
    }

    renderMasonry = ({width}) => {
        const { height, scrollTop } = this.state;
        const posts = get(this.props, 'data.allGhostPost.edges');
        this.setState({ width });
    
        return (
            <Masonry
                autoWidth={true}
                cellCount={posts.length - 1}
                cellMeasurerCache={this.cache}
                cellPositioner={this.cellPositioner}
                cellRenderer={this.cellRenderer}
                height={height}
                overscanByPixels={0}
                scrollTop={scrollTop}
                ref={ref => this.masonry = ref}
                width={width}
            />
        );
    }
  
    render() {
        const { classes, location, pageContext, data } = this.props;
        const siteTitle = get(data, 'site.siteMetadata.title');
        const siteDescription = get(data, 'site.siteMetadata.description');
        const { height, width, scrollTop } = this.state;

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
                <WindowScroller overscanByPixels={0}>
                    {this.renderAutoSizer}
                </WindowScroller>
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
        )
      }
}

export default withStyles(styles)(BlogList);

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
        plaintext: markdown
        feature_image: image
      }
    }
  }
}
`
