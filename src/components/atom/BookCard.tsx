import { ChakraProps, Flex, ListItem, useColorMode } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const BookCard: React.FC<Props & ChakraProps> = props => {
  const { colorMode } = useColorMode();
  return (
    <ListItem
      borderRadius="10px"
      p="2"
      mr="4"
      border="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'background.100'}
    >
      <Flex direction="column">{props.children}</Flex>
    </ListItem>
  );
};

export default BookCard;
