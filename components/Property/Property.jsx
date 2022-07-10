import Link from 'next/link';
import { Box, Text, Flex, Avatar, Image } from '@chakra-ui/react';
import ImageWithSkeleton from '../ImageWithSkeleton';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../../public/sample_house.jpg';

console.log('default', defaultImage);

export const Property = (props) => {
  console.log(props);
  const { property } = props;
  const {
    slug,
    coverPhoto,
    price,
    isVerified,
    rentFrequency,
    agency,
    rooms,
    baths,
    area,
    title,
  } = property;

  return (
    <Link href={`/property/${slug}`} passHref>
      <Flex
        flexWrap={'wrap'}
        w='420px'
        p={5}
        pt={0}
        justifyContent='flex-start'
        cursor='pointer'
      >
        <Box>
          <ImageWithSkeleton
            src={!!coverPhoto ? coverPhoto.url : defaultImage.src}
            width='400px'
            height='260px'
          />
        </Box>
        <Box w='full'>
          <Flex alignItems={'center'}>
            <Box pr={3} color='green.400'>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight={'bold'} fontSize='large' flex={1}>
              {' '}
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}{' '}
            </Text>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent='space-between'
            p={1}
            color={'blue.400'}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {`${millify(area)} sqft`}{' '}
            <BsGridFill />
          </Flex>
          <Text fontSize={'lg'}>
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
