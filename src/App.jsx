import { Box } from '@chakra-ui/react';

import { Hero } from './components/hero/Hero';
import { ProductSection } from './components/product/ProductSection';
import { GridContainer } from './components/grid/GridContainer';

function App() {

  return (
    <Box w="100%" h="100vh" as="main">
      <Hero />
      <ProductSection />
      <GridContainer />
    </Box>
  )
}

export default App
