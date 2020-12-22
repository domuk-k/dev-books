import { Box, ChakraProps, Text, VisuallyHidden } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

enum LogoType {
  horizontal,
  square,
}

interface Props extends ChakraProps {
  logoType: LogoType;
}

const Logo: React.FC<Props> = ({ logoType, ...props }) => {
  return (
    <>
      <VisuallyHidden as="h1">데브북스: 2021 개발 서적 읽기</VisuallyHidden>
      <Text
        fontSize={logoType ? '2rem' : '3rem'}
        fontFamily="'Space Mono', monospace"
        fontStyle={logoType ? 'unset' : 'italic'}
        textAlign="center"
        fontWeight="700"
        w="100%"
        letterSpacing="-2px"
        {...props}
      >
        {logoType ? 'DV' : 'devooks'}
      </Text>
    </>
  );
};

const MemoLogo = React.memo(Logo);
export default MemoLogo;
