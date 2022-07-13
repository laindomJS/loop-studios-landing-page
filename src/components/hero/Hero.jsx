import { Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Navbar } from './Navbar';

import bg from '../../assets/desktop/image-hero.jpg';

export const Hero = () => {
  return (
    <Box w="100%" h="100%" bgImage={bg} bgSize="cover" bgRepeat="no-repeat" p="4rem" as={motion.header} initial={ {opacity:0} } whileInView={ {opacity:1} } viewport={ {once: true} }>
      <Navbar />

     <Box mt="6rem" ml="2rem" w="650px" border="2px solid white" p="2rem">
      <Heading fontSize="70px" color="white" textTransform="uppercase" fontWeight="normal" letterSpacing="2px">
          Immersive experiences that deliver
        </Heading>
     </Box>

    </Box>
  )
}