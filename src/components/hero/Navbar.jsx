import { Flex, Image, Button, Text, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.svg';

export const Navbar = () => {
  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between" px="2rem">
      <Image src={logo} w="210px" />

      <HStack spacing="25px">
        <Text as={motion.p} fontSize="16px" color="white">About</Text>
        <Text as={motion.p} fontSize="16px" color="white">Careers</Text>
        <Text as={motion.p} fontSize="16px" color="white">Events</Text>
        <Text as={motion.p} fontSize="16px" color="white">Products</Text>
        <Text as={motion.p} fontSize="16px" color="white">Support</Text>
      </HStack>

    </Flex>
  )
}