import { useState } from 'react';
import { Skeleton, Image } from '@chakra-ui/react';

export const ImageWithSkeleton = (props) => {
  const {
    src,
    height,
    width,
    objectFit = 'cover',
    imageProps,
    skeletonProps,
  } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Skeleton isLoaded={imageLoaded} borderRadius='md' {...skeletonProps}>
      <Image
        src={src}
        onLoad={() => setImageLoaded(true)}
        borderRadius='md'
        height={height}
        width={width}
        objectFit={objectFit}
        {...imageProps}
      />
    </Skeleton>
  );
};
