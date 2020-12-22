import {
  Box,
  Center,
  Divider,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from '../../app/modules';
import BookCard from '../atom/BookCard';

interface Props {}

const BookBoard: React.FC<Props> = () => {
  const books = useSelector((state: CombinedState) => state.book.books);

  return (
    <Box as="main" overflowX="hidden" py={8}>
      <Box as="header" flexGrow={1}>
        <Text as="h1">Browse around</Text>
        <Divider borderColor={useColorModeValue('borderLight', 'borderDark')} />
        <Text as="h2">all books</Text>
      </Box>
      <Center pt="5">
        <SimpleGrid as="ul" w="100%" gap="12px" minChildWidth="240px">
          {[...books, ...books]?.map(book => (
            <BookCard key={book._id} book={book} />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default BookBoard;
