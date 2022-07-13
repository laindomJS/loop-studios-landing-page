import { Flex, Box, Heading } from '@chakra-ui/react';

import { Btn } from './Btn';
import { GridSections } from './GridSections';

export const GridContainer = () => {
  return (
    <Box p="8rem" as="section">
      <Flex alignItems="center" justifyContent="space-between" mb="4rem">
        <Heading as="h2" fontWeight="normal" letterSpacing="2px" textTransform="uppercase">Our Creations</Heading>   
        <Btn />
      </Flex>
      <GridSections />
    </Box>
  )
}