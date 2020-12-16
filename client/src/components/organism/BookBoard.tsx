import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BookInfo } from '../../redux/modules/book/types';
import BookCard from '../atom/BookCard';

interface Props {
  books: BookInfo[];
}

const book = {
  _id: Math.floor(Math.random() * 100) + '',
  title: '프로그래밍 타입스크립트',
  author: 'Boris Cherny',
  description: '이 책은 타입스크립트을 이해하는 데 좋습니다',
  isOpen: true,
  imgURL:
    'https://images-na.ssl-images-amazon.com/images/I/41yafGMO%2BrL._AC_SY400_.jpg',
  imgAlt: 'null',
  owner: {
    marked_books: [],
    done_books: [],
    _id: '5fd9983abeae29ea0793331e',
    email: 'asd@gmail.com',
    password: '$2b$10$eXycu2BpS6fqYp8X.hvfguhpOOcXoU1CuXK1Kb/NAPHNVqOo9aBzu',
    username: 'Boris Cherny',
    createdAt: '2020-12-16T05:16:42.459Z',
    updatedAt: '2020-12-16T05:16:42.459Z',
  },
};

const BookBoard: React.FC<Props> = ({ books }) => {
  return (
    <Box as="main" overflowX="hidden">
      <Box as="header" flexGrow={1}>
        <Text as="h1">둘러보기</Text>
      </Box>
      <Flex wrap="nowrap" as="ul">
        {[book, ...books].map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </Flex>
    </Box>
  );
};

export default BookBoard;
