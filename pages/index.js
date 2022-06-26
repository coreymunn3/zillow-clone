import { Box } from '@chakra-ui/react';
import { Banner } from '../components';

export default function Home() {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes For'
        title2='Everyone'
        desc1='Explore Apartments, Condos, Homes'
        desc2='And more'
        linkName='/search?purpose=for-rent'
        imageUrl='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg'
        buttonText='Explore Renting'
      />
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy, Own your'
        title2='Dream Home'
        desc1='Explore Apartments, Condos, Homes'
        desc2='And more'
        linkName='/search?purpose=for-sale'
        imageUrl='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg'
        buttonText='Explore Buying'
      />
    </Box>
  );
}
