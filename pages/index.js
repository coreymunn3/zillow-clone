import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  imageUrl,
  buttonText,
}) => {
  return (
    <Flex justifyContent={'center'} alignItems='center' m='10'>
      <Image src={imageUrl} width={500} height={300} />
      <Box p={5}>
        <Text color={'gray.500'} fontSize='small' fontWeight='medium'>
          {purpose}
        </Text>
        <Text fontSize='3xl' fontWeight='medium'>
          {title1} <br /> {title2}
        </Text>
        <Text color='gray.700' fontSize='lg' pt={3} pb={3} fontWeight='medium'>
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize={'xl'} bg='blue.300' color='white'>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
