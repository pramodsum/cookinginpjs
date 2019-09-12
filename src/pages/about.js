import React from 'react';
// import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';

import profileImg from '../assets/about.jpg';
import bgy from '../assets/bgyl.png';
import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';

const SUMU_EMAIL = `mailto:sumu@cookinginpjs.com`;
const ANU_EMAIL = `mailto:anu@cookinginpjs.com`;

const styles = {
  main: {
    padding: `2rem`,

    '@media (min-width: 768px)': {
      display: `flex`,
      alignItems: `center`,
    },
  },
  img: {
    padding: `1rem 2rem 0 0`,
    width: `100%`,
    // height: `auto`,
    transition: `opacity .4s`,
    borderRadius: `50%`,

    '&:hover': {
      opacity: `.75`,
    },
  },
  content: {
    marginBottom: `2.5rem`,
  },
  title: {
    fontFamily: `'Homemade Apple', cursive`,
    fontSize: `2.5rem`,
    margin: 0,
  },
  salutation: {
    fontSize: `2rem`,
    fontFamily: `'Zeyada', cursive`,
    lineHeight: `1rem`,
    marginTop: `3rem`,
  },
  signature: {
    fontSize: `3rem`,
    fontFamily: `'Homemade Apple', cursive`,
    margin: `8px 0`,

    '& a': {
      padding: `8px 0`,
    },

    '& a:hover': {
      background: `url(${bgy}) repeat`,
    },
  },
};

const AboutPage = ({ data, classes, location }) => (
  <>
    <MetaData data={data} location={location} type="profile" />
    <Layout showSidebar={false}>
      <div className={classes.main}>
        <img className={classes.img} src={profileImg} />
        <div className={classes.content}>
          <h3 className={classes.title}>Hello and welcome!</h3>
          <p>
            They say that poetry is the food of love, but we disagree; food is the food of love.
            Cinnamon buns soothe your stress cut edges, macarons are fluffy-sweet puppy love, and
            nothing says “this is my best friend” like a hilariously botched Jello recipe.
          </p>
          <p>
            We've known each other pretty much forever, and this blog is the ongoing narrative of
            our friendship, which has, by turns, been burnt, crispy, savory, sweet, and decadent.
            These are the tales of our culinary exploits, from figuring out poached eggs (a la Julie
            and Julia) to identifying the right balance of salt and cayenne for South Indian rasam.
            We're not always on the same page, or in the same state, or even on the same continent,
            but two things are generally true: at least one of us is dreaming about food, and at
            least one of us is wearing her pajamas.
          </p>
          <p className={classes.signature}>
            <div className={classes.salutation}>Love, {` `}</div>
            <a href={SUMU_EMAIL}>Sumu</a> &{` `}
            <a href={ANU_EMAIL}>Anu</a>.
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default withStyles(styles)(AboutPage);
