import { Box, Image, Heading, Text } from '@chakra-ui/react';

import interactive from '../../assets/desktop/image-interactive.jpg';

export const ProductSection = () => {
  return (
    <Box as="section" p="8rem" position="relative">
      <Image src={interactive} />
      <Box w="480px" bgColor="white" position="absolute" top="340px" left="670px" p="2rem" initial={ {x:1000} } whileInView={ {x:0} } viewport={ {once:true} }>
        <Heading mb="1rem" fontSize="40px" letterSpacing="2px" fontWeight="normal" textTransform="uppercase">The Leader in interactive VR</Heading>
        <Text fontSize="15px">Founded in 2011, Loopstudios has been producing world-class virtual reality project for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Text>
      </Box>
    </Box>
  )
}