import React from "react";
import { Link } from "gatsby";
import { withStyles } from '@material-ui/core';
import MiniPost from '../Post/MiniPost';

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

const PostList = ({ pageContext, posts, classes, siteUrl }) => {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return (
        <div>
            <div className={classes.list}>
                {
                    posts.map(({ node }) => <MiniPost {...node} siteUrl={siteUrl} key={node.uuid} />)
                }
            </div>
            <ul className={classes.pageLinks}>
                <li>{
                    !isFirst &&
                    <Link to={prevPage} rel="prev">← Back it up</Link>
                }</li>
                <li>{
                    !isLast &&
                    <Link to={nextPage} rel="next">Thank you, next →</Link>
                }</li>
            </ul>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(PostList);