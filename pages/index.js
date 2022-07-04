import { Box, Flex } from '@chakra-ui/react';
import { Banner, Property } from '../components';
import { fetchApi } from '../utils/fetchApi';

export default function Home(props) {
  const { propertiesForRent, propertiesForSale } = props;
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
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
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
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi('properties/list', {
    purpose: 'for-sale',
    locationExternalIDs: 5002,
    hitsPerPage: 6,
  });
  const propertiesForRent = await fetchApi('properties/list', {
    purpose: 'for-rent',
    locationExternalIDs: 5002,
    hitsPerPage: 6,
  });

  return {
    props: {
      propertiesForSale: propertiesForSale.hits,
      propertiesForRent: propertiesForRent.hits,
    },
  };
}
