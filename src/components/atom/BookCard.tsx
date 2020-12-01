import { ChakraProps, Flex, ListItem } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const BookCard: React.FC<Props & ChakraProps> = props => {
  return (
    <ListItem borderRadius="10px" bg="gray.700" p="3" mr="4">
      <Flex direction="column">{props.children}</Flex>
    </ListItem>
  );
};

export default BookCard;
