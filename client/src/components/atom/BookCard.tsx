import { Box, ChakraProps, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { BookInfo } from '../../redux/modules/book/types';

interface Props {
  book: BookInfo;
}

const BookCard: React.FC<Props & ChakraProps> = ({ book }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius="10px"
      p="2"
      mr="4"
      border="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'background.100'}
    >
      <Flex direction="column">
        <div>{book.title}</div>
        <div>{book.author}</div>
      </Flex>
    </Box>
  );
};

export default BookCard;
