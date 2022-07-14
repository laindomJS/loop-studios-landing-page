import { Box, Image, Heading, Text } from '@chakra-ui/react';

import interactive from '../../assets/desktop/image-interactive.jpg';

export const ProductSection = () => {

  const data = {
    heading: 'The Leader in interactive VR',
    text: 'Founded in 2011, Loopstudios has been producing world-class virtual reality project for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.'
  }

  return (
    <Box as="section" p="8rem" position="relative">
      <Image src={interactive} />
      <Box w="490px" bgColor="white" position="absolute" top="340px" left="670px" p="2rem">
        <Heading mb="1rem" fontSize="40px" letterSpacing="2px" fontWeight="normal" textTransform="uppercase">{data.heading}</Heading>
        <Text fontSize="15px">{data.text}</Text>
      </Box>
    </Box>
  )
}