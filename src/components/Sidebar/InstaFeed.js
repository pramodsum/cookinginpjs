import React from 'react';
import { withStyles } from '@material-ui/core';
import { buildUrl } from 'instafeed-lite';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    instaFeed: {},
};

const OPTIONS = {
    get: 'user',
    userId: '2462667315',
    sortBy: 'most-liked',
    clientId: '72bfc048bd36447fa3d50e3725fa31ed'
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
                console.log(response);
            })
    }

    render() {
        const { classes } = this.props;
        const { posts } = this.state;
        return(
            <div className={classes.instaFeed}>
            {
                posts.map((post) => {
                    <li className={classes.instaPost}>{post}</li>
                })
            }
            </div>
        );
    }
}

export default withStyles(styles)(InstaFeed);