import { Flex, Image, Icon, Box, HStack, Text } from '@chakra-ui/react';
import { FaFacebookSquare, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.svg';
import { Navbar } from '../hero/Navbar';

export const Footer = () => {
  return (
    <Flex p="4rem" alignItems="center" justifyContent="space-around" bgColor="black" color="white">
      
      <Box>
        <Image src={logo} w="210px" mb="2rem" /> 
        <HStack spacing="25px">
          <Text as={motion.p} fontSize="16px" color="white" whileHover={ {cursor:'pointer', borderBottom:'1px solid white'} }>About</Text>
          <Text as={motion.p} fontSize="16px" color="white" whileHover={ {cursor:'pointer', borderBottom:'1px solid white'} }>Careers</Text>
          <Text as={motion.p} fontSize="16px" color="white" whileHover={ {cursor:'pointer', borderBottom:'1px solid white'} }>Events</Text>
          <Text as={motion.p} fontSize="16px" color="white" whileHover={ {cursor:'pointer', borderBottom:'1px solid white'} }>Products</Text>
          <Text as={motion.p} fontSize="16px" color="white" whileHover={ {cursor:'pointer', borderBottom:'1px solid white'} }>Support</Text>
        </HStack>
      </Box>

      <Box>
        <Flex experimental_spaceX={5} mb="2rem">
          <Icon as={FaFacebookSquare} w="35px" h="35px" _hover={ {cursor:'pointer'} } />
          <Icon as={FaTwitter} w="35px" h="35px" _hover={ {cursor:'pointer'} } />
          <Icon as={FaPinterestP} w="35px" h="35px" _hover={ {cursor:'pointer'} } />
          <Icon as={FaInstagram} w="35px" h="35px" _hover={ {cursor:'pointer'} } />
        </Flex>

        <Text fontSize="15px" color="gray.600" letterSpacing="1px"> © {" "} Loopstudios. All rights reserved. </Text>
      </Box>
    
    </Flex>
  )
}