import React from 'react';
import styled from '@emotion/styled';

import { Box, SimpleGrid, RadioButtonGroup, Radio } from '@chakra-ui/core';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const OptionTitle = styled.h3({
  fontFamily: "'Homemade Apple', cursive",
  textTransform: 'lowercase',
  overflowWrap: 'break-word',
  fontSize: '1.25rem',
});

interface IOrderFormProps {
  options: any[];
  variants: any[]
}

const OrderForm: React.FC<IOrderFormProps> = ({ options, variants }) => {
  const sizes = options[0];
  const [size, onSizeChange] = React.useState<string>(sizes[0]);
  const layers = options[1];
  const [layer, onLayerChange] = React.useState<string>(layers[0]);
  const frostingFlavors = options[2];
  const [frosting, onFrostingChange] = React.useState<string>(frostingFlavors[0]);
  // debugger;

  const findMatchingVariant = () => {
    const matching = variants.find(variant => {
      return (
        variant.selectedOptions.some(selected => selected.value === size) &&
        variant.selectedOptions.some(selected => selected.value === layer) &&
        variant.selectedOptions.some(selected => selected.value === frosting)
      );
    });
    console.log(matching);
  };

  React.useEffect(() => {
    // size && console.log(sizes[size]);
    layer && console.log(layer);
    // findMatchingVariant();
  }, [size, layer, frosting]);
  return (
    <Box>
      {/* <Box my={3}>
        <FormControl>
          <OptionTitle>{sizes.name}</OptionTitle>
          <Select
            onChange={e => {
              debugger;
              console.log(e);
              onSizeChange(e.target.value);
            }}
            value={sizes.values[size]}
            variant="outlined">
            <SimpleGrid columns={3} spacing="5px">
              {sizes.values.map((value, index) => (
                <MenuItem key={value} value={index}>
                  {value}
                </MenuItem>
              ))}
            </SimpleGrid>
          </Select>
        </FormControl>
      </Box> */}
      <Box my={3}>
        <OptionTitle>{layers.name}</OptionTitle>
        <RadioButtonGroup
          onChange={(value: string)=> {
            debugger;
            onLayerChange(value);
          }}
          defaultValue={layers.values[0]}
          value={layer}>
          {/* <SimpleGrid columns={3} spacing="5px"> */}
          {layers.values.map((value: string) => (
            <Radio value={value}>{value}</Radio>
          ))}
          {/* </SimpleGrid> */}
        </RadioButtonGroup>
      </Box>
      {/* <Box my={3}>
      <OptionTitle>{frostingFlavors.name}</OptionTitle>
      <RadioButtonGroup
        onChange={e => e?.target && onFrostingChange(e.target.value)}
        defaultValue={frostingFlavors[0]}
        value={frosting}>
        <SimpleGrid columns={3} spacing="5px">
          {frostingFlavors.values.map(value => (
            <Radio value={value}>{value}</Radio>
          ))}
        </SimpleGrid>
      </RadioButtonGroup>
    </Box> */}
    </Box>
  );
};

export default OrderForm;
