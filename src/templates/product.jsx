import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from '../components/common/Link';
import Image from '../components/common/Image';
import Content from '../components/common/Content';
import OrderForm from '../components/OrderForm/OrderForm';

const ProductWrapper = styled(Box)({
  margin: '0 auto 1rem',
  width: '90%',

  '@media screen and (max-width: 375px)': {
    width: '95%',
  },
});

const Title = styled.h1({
  fontFamily: "'Homemade Apple', cursive",
  textTransform: 'lowercase',
  overflowWrap: 'break-word',
  fontSize: '2rem',
});

const FeatureWrapper = styled(Box)({
  position: 'relative',
  paddingBottom: '10px',
});

const TagList = styled.ul({
  listStyle: 'none',
  display: 'inline-flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
});

const TagsIcon = styled(FontAwesomeIcon)({
  color: 'gray',
  margin: '0 5px',
});

const Tag = styled.li({
  fontFamily: "'Srisakdi', cursive",
  fontSize: '15px',
  marginRight: '3px',
  textTransform: 'lowercase',
});

/**
 * Single product view (/:slug)
 *
 * This file renders a single product and loads all the content.
 *
 */
const Product = ({
  pageResources: {
    json: { data },
  },
  location,
}) => {
  const { shopifyProduct } = data;
  const { title, descriptionHtml, options, variants } = shopifyProduct;

  return (
    <>
      <MetaData data={data} location={location} type="website" />
      <Layout>
        <ProductWrapper>
          <Title>{title}</Title>
          <OrderForm options={options} variants={variants} />
          <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </ProductWrapper>
      </Layout>
    </>
  );
};

Product.propTypes = {
  pageResources: PropTypes.shape({
    json: PropTypes.shape({
      data: PropTypes.shape({
        shopifyProduct: PropTypes.shape({
          title: PropTypes.string.isRequired,
          descriptionHtml: PropTypes.string.isRequired,
          options: PropTypes.array.isRequired,
          handle: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default Product;

export const productQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      ...ShopifyProductFields
    }
  }
`;
