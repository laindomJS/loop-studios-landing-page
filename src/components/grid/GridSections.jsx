import { Grid, GridItem, Image, Box, Text } from '@chakra-ui/react';

export const GridSections = () => {

  const srcs = [
    {
    id: 1,
    text: 'Deep earth',
    dir: '/src/assets/desktop/image-deep-earth.jpg'
  },
  {
    id: 2,
    text: 'Night Arcade',
    dir: '/src/assets/desktop/image-night-arcade.jpg'
  },
  {
    id: 3,
    text: 'Soccer team vr',
    dir: '/src/assets/desktop/image-soccer-team.jpg'
  },
  {
    id: 4,
    text: 'The grid',
    dir: '/src/assets/desktop/image-grid.jpg'
  },
  {
    id: 5,
    text: 'From up above vr',
    dir: '/src/assets/desktop/image-from-above.jpg'
  },
  {
    id: 6,
    text: 'Pocket Borealis',
    dir: '/src/assets/desktop/image-pocket-borealis.jpg'
  },
  {
    id: 7,
    text: 'The curiosity',
    dir: '/src/assets/desktop/image-curiosity.jpg'
  },
  {
    id: 8,
    text: 'Make it fisheye',
    dir: '/src/assets/desktop/image-fisheye.jpg'
  },
]


  return (
    <Grid templateColumns='repeat(4, 1fr)' gap="20px" as="section">
      {srcs.map((src) => (
        <GridItem key={src.id} as="article" w="fit-content" position="relative" _hover={ {color:'black', cursor:'pointer'} }>
          <Image src={src.dir} />
          <Box position="absolute" top="20rem" p="1rem" textAlign="left" fontSize="35px" fontFamily="heading" color="white" fontWeight="normal" textTransform="uppercase" letterSpacing="3px">
            <Text>{src.text}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}