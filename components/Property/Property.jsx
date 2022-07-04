import Link from 'next/link';
import { Box, Text, Flex, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

export const Property = (props) => {
  console.log(props);
  const { property } = props;

  return (
    <Link href={`/property/${property.slug}`} passHref>
      {property.title}
    </Link>
  );
};
