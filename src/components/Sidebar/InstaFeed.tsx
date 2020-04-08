import React from "react";
import styled from "@emotion/styled";
import { buildUrl } from "instafeed-lite";
import InstaPost, { InstaPostProps } from "./InstaPost";

// import Map from './Map';
const Feed = styled.ul({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  padding: "0",
  listStyle: "none"
});

const FeedTitle = styled.h2({
  fontFamily: "'Homemade Apple', cursive",
  lineHeight: 1
});

const OPTIONS = {
  get: "user",
  userId: '2462667315',
  sortBy: "most-liked",
  clientId: '72bfc048bd36447fa3d50e3725fa31ed',
  accessToken: '2462667315.72bfc04.dc8bae27a5b44f368eda1cb301f8d199'
};

type InstaFeedState = {
  posts: InstaPostProps[]
};

class InstaFeed extends React.Component<{}, InstaFeedState> {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    fetch(buildUrl(OPTIONS))
      .then(res => res.json())
      .then(
        ({ meta, data: posts }) => meta.code === 200 && this.setState({ posts })
      );
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length > 0 && <FeedTitle>*Cue Drool*</FeedTitle>}
        <Feed>
          {posts.map(post => (
            <li key={post.id}>
              <InstaPost {...post} />
            </li>
          ))}
        </Feed>
      </div>
    );
  }
}

export default InstaFeed;
