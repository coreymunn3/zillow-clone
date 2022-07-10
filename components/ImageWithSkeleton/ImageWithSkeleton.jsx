import { useState, useRef, useEffect } from 'react';
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

  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded && imageRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <Skeleton isLoaded={imageLoaded} borderRadius='md' {...skeletonProps}>
      <Image
        ref={imageRef}
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
