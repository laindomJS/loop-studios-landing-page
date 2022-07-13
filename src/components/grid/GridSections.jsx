import { Grid, GridItem, Image } from '@chakra-ui/react';

export const GridSections = () => {

  const srcs = [
    {
    id: 1,
    dir: '/src/assets/desktop/image-deep-earth.jpg'
  },
  {
    id: 2,
    dir: '/src/assets/desktop/image-night-arcade.jpg'
  },
  {
    id: 3,
    dir: '/src/assets/desktop/image-soccer-team.jpg'
  },
  {
    id: 4,
    dir: '/src/assets/desktop/image-grid.jpg'
  },
  {
    id: 5,
    dir: '/src/assets/desktop/image-from-above.jpg'
  },
  {
    id: 6,
    dir: '/src/assets/desktop/image-pocket-borealis.jpg'
  },
  {
    id: 7,
    dir: '/src/assets/desktop/image-curiosity.jpg'
  },
  {
    id: 8,
    dir: '/src/assets/desktop/image-fisheye.jpg'
  },
]


  return (
    <Grid templateColumns='repeat(4, 1fr)' gap="20px" as="section">
      {srcs.map((src) => (
        <GridItem key={src.id} as="article">
          <Image src={src.dir} />
        </GridItem>
      ))}
    </Grid>
  )
}