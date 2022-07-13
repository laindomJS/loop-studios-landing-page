import { Button } from '@chakra-ui/react';

export const Btn = () => {
  return (
    <Button border="2px solid black" borderRadius="none" color="black" bgColor="white" p="1rem" w="140px" h="45px" _hover={ {color:'white', bgColor:'black'} } transition=".2s ease-in" textTransform="uppercase" fontSize="18px" fontWeight="normal" letterSpacing="2px">
      See All
    </Button>
  )
}