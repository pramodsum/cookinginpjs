import React from 'react';
import { withStyles } from '@material-ui/core';
import { buildUrl } from 'instafeed-lite';

import InstaPost from './InstaPost';
// import Map from './Map';

const styles = {
    instaFeed: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        padding: '0',
    },
    title: {
        fontFamily: "'Homemade Apple', cursive",
        lineHeight: 1,
    },
    instaPost: {
        listStyle: 'none',
    },
};

const OPTIONS = {
    get: 'user',
    userId: '2462667315',
    sortBy: 'most-liked',
    clientId: '72bfc048bd36447fa3d50e3725fa31ed',
    accessToken: '2462667315.72bfc04.dc8bae27a5b44f368eda1cb301f8d199'
};

class InstaFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }
    componentDidMount() {
        const instagramUrl = buildUrl(OPTIONS);
        fetch(instagramUrl)
            .then(response => response.json())
            .then(response => {
                if (response.meta.code !== 200) {
                    return;
                } 
                this.setState({ posts: response.data });
            })
    }

    render() {
        const { classes } = this.props;
        const { posts } = this.state;
        return(
            <div>
                {/* <Map posts={posts} /> */}
                {posts.length > 0 && <h2 className={classes.title}>*Cue Drool*</h2>}
                <ul className={classes.instaFeed}>
                    {
                        posts.map((post) => (
                            <li key={post.id} className={classes.instaPost}><InstaPost {...post} /></li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(InstaFeed);