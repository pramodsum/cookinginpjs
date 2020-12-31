// @ts-nocheck
import React from 'react';
import styled from '@emotion/styled';
import uniqBy from 'lodash/uniqBy';

import { Box, RadioButtonGroup, Radio, Heading, HeadingProps } from '@chakra-ui/core';
import {
  ProductQuery_shopifyProduct,
  ProductQuery_shopifyProduct_options,
  ProductQuery_shopifyProduct_variants,
} from '../../templates/_types/ProductQuery';
import { CakeVariant } from '../common/CakeImg';

const H3: React.FC<HeadingProps> = props => <Heading as="h3" size="md" {...props} />;

const OptionTitle = styled(H3)({
  fontWeight: 'lighter',
  textTransform: 'uppercase',
  overflowWrap: 'break-word',
});

const RadioButtonGrid = styled(RadioButtonGroup)`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`;

const RadioButton = styled(Radio)`
  margin-bottom: 5px;

  & div {
    color: unset;
  }
`;

const filterVariants = (
  parentArr: ProductQuery_shopifyProduct_variants[],
  name: string,
  value: string,
) =>
  parentArr.filter((variant: ProductQuery_shopifyProduct_variants) =>
    variant.selectedOptions.some(option => option.name === name && option.value === value),
  );

const parseValuesFromOption = (
  parentArr: ProductQuery_shopifyProduct_variants_selectedOptions[],
  name: string,
) =>
  uniqBy(
    parentArr.map((variant: ProductQuery_shopifyProduct_variants) =>
      variant.selectedOptions.find(option => option.name === name),
    ),
    'value',
  );

const OrderForm: React.FC<ProductQuery_shopifyProduct & {
  findMatchingVariant: (size: string, layer: string, frosting: string) => void;
  variants: ProductQuery_shopifyProduct_variants[];
  selectedVariant: ProductQuery_shopifyProduct_variants;
  setCakeVariant: React.Dispatch<CakeVariant>;
}> = ({ options, selectedVariant, findMatchingVariant, priceRange, variants, setCakeVariant }) => {
  const sizes: string[] = options[0] || [];
  const [size, onSizeChange] = React.useState<string>();

  const [frostingOptions, setFrostingOptions] = React.useState<
    ProductQuery_shopifyProduct_variants[]
  >([]);
  const frostingFlavors: ProductQuery_shopifyProduct_options = options[2];
  const [frosting, onFrostingChange] = React.useState<string>();

  const [layerOptions, setLayerOptions] = React.useState<ProductQuery_shopifyProduct_variants[]>(
    [],
  );
  const layers: ProductQuery_shopifyProduct_options = options[1];
  const [layer, onLayerChange] = React.useState<string>();

  React.useEffect(() => {
    setCakeVariant({ size, layer: layer || 'Single', frosting });
    size && layer && frosting && findMatchingVariant(size, layer, frosting);
  }, [size, layer, frosting]);

  React.useEffect(() => {
    if (size && frosting) return;
    const sizeFilteredVariants = filterVariants(variants, 'Size', size);
    const frostingVariants = parseValuesFromOption(sizeFilteredVariants, 'Frosting Flavor');
    setFrostingOptions(frostingVariants);
  }, [size]);

  React.useEffect(() => {
    if (size && layer && frosting) return;
    const sizeFilteredVariants = filterVariants(variants, 'Size', size);
    const frostingFilteredVariants = filterVariants(
      sizeFilteredVariants,
      'Frosting Flavor',
      frosting,
    );
    const layerVariants = parseValuesFromOption(frostingFilteredVariants, 'Layers');
    setLayerOptions(layerVariants);
  }, [size, frosting]);

  return (
    <Box fontFamily="'Lato', serif">
      <OptionTitle
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px dashed gray"
        mt={0}>
        <Box>Price: </Box>
        {selectedVariant ? (
          <OptionTitle fontWeight="300" m={0}>
            ${selectedVariant.price}
          </OptionTitle>
        ) : (
          <OptionTitle fontWeight="300" m={0}>
            ${priceRange.minVariantPrice.amount} - ${priceRange.maxVariantPrice.amount}
          </OptionTitle>
        )}
      </OptionTitle>
      <Box my={3}>
        <OptionTitle>{sizes.name}</OptionTitle>
        <RadioButtonGrid onChange={(value: string) => onSizeChange(value)} value={size}>
          {sizes.values.map((value: string, index: number) => (
            <RadioButton key={index} value={value}>
              {value}
            </RadioButton>
          ))}
        </RadioButtonGrid>
      </Box>
      {size && frostingOptions.length > 0 && (
        <Box my={3}>
          <OptionTitle>{frostingFlavors.name}</OptionTitle>
          <RadioButtonGrid onChange={(value: string) => onFrostingChange(value)} value={frosting}>
            {frostingOptions.map(
              ({ value }: ProductQuery_shopifyProduct_variants_selectedOptions, index: number) => (
                <RadioButton key={index} value={value}>
                  {value}
                </RadioButton>
              ),
            )}
          </RadioButtonGrid>
        </Box>
      )}
      {size && frosting && layerOptions.length > 0 && (
        <Box my={3}>
          <OptionTitle>{layers.name}</OptionTitle>
          <RadioButtonGrid onChange={(value: string) => onLayerChange(value)} value={layer}>
            {layerOptions.map(
              ({ value }: ProductQuery_shopifyProduct_variants_selectedOptions, index: number) => (
                <RadioButton key={index} value={value}>
                  {value}
                </RadioButton>
              ),
            )}
          </RadioButtonGrid>
        </Box>
      )}
    </Box>
  );
};

export default OrderForm;
