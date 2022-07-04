import Link from 'next/link';
import { Flex, Box, Text, Button, Image } from '@chakra-ui/react';
import ImageWithSkeleton from '../ImageWithSkeleton';

export const Banner = ({
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
      <ImageWithSkeleton src={imageUrl} width={500} height={300} />
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
