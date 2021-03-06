import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/core';
import Layout from '../components/common/Layout';
import { MetaData } from '../components/common/meta';

import OrderForm from '../components/OrderForm/OrderForm';
import {
  ProductQuery_shopifyProduct,
  ProductQuery_shopifyProduct_variants,
} from './_types/ProductQuery';
import CakeImg, { CakeVariant } from '../components/common/CakeImg';
import CakeImgBackground from '../components/common/CakeImgBackground';

const ProductWrapper = styled(Box)({
  margin: '0 auto 1rem',
  width: '90%',
  '@media screen and (max-width: 375px)': {
    width: '95%',
  },
});

const Title = styled.h1({
  textTransform: 'uppercase',
  overflowWrap: 'break-word',
  fontSize: '2rem',
  fontWeight: 'lighter',
  letterSpacing: '-0.1rem'
});

type ProductProps = {
  pageResources?: {
    json: {
      data: {
        shopifyProduct: ProductQuery_shopifyProduct;
      };
    };
  };
  path: string;
  location: {
    pathname: string;
  };
};

const Product: React.FC<ProductProps> = ({
  pageResources,
  location,
}) => {
  if (!pageResources?.json?.data) return null;

  const { shopifyProduct } = pageResources.json.data;
  const { title,  variants } = shopifyProduct;
  const [selectedVariant, setSelectedVariant] = React.useState<
    ProductQuery_shopifyProduct_variants
  >();
  const [cakeVariant, setCakeVariant] = React.useState<CakeVariant>();

  const findMatchingVariant = (size: string, layer: string, frosting: string) => {
    const matching = variants.find(
      variant =>
        variant.selectedOptions.some(selected => selected.value === size) &&
        variant.selectedOptions.some(selected => selected.value === layer) &&
        variant.selectedOptions.some(selected => selected.value === frosting),
    );
    matching && setSelectedVariant(matching);
  };

  return (
    <>
      <MetaData data={pageResources.json.data} location={location} type="website" />
      <Layout showSidebar={false}>
        <ProductWrapper>
          <Title>{title}</Title>
          <Flex flexDirection={['column', 'row']}>
            <Flex height="200px">
              <CakeImgBackground>
                {cakeVariant && <CakeImg cakeFlavor={title} variant={cakeVariant} />}
              </CakeImgBackground>
            </Flex>
            {shopifyProduct && (
              <OrderForm
                findMatchingVariant={findMatchingVariant}
                selectedVariant={selectedVariant}
                setCakeVariant={setCakeVariant}
                {...shopifyProduct}
              />
            )}
          </Flex>
          {/* <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </ProductWrapper>
      </Layout>
    </>
  );
};

export const productQuery = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export default Product;
