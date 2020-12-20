import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from '../../app/modules';
import { BookInfo } from '../../app/modules/book/types';
import BookCard from '../atom/BookCard';

interface Props {}

const BookBoard: React.FC<Props> = () => {
  const books = useSelector((state: CombinedState) => state.book.books);

  return (
    <Box as="main" overflowX="hidden">
      <Box as="header" flexGrow={1}>
        <Text as="h1">둘러보기</Text>
      </Box>
      <Flex wrap="nowrap" as="ul">
        {books?.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </Flex>
    </Box>
  );
};

export default BookBoard;
