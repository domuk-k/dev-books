import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import BookCard from '../atom/BookCard';

interface Props {}

const book = {
  id: Math.floor(Math.random() * 100),
  title: '프로그래밍 타입스크립트',
  author: 'Boris Cherny',
  imageURL:
    'https://images-na.ssl-images-amazon.com/images/I/41yafGMO%2BrL._AC_SY400_.jpg',
  imageAlt: '이미지대체텍스트',
  description: '이 책은 타입스크립트을 이해하는 데 좋습니다',
};

const BookBoard: React.FC<Props> = () => {
  return (
    <Box as="main" overflowX="hidden">
      <Box as="header" flexGrow={1}>
        <Text as="h1">둘러보기</Text>
      </Box>
      <Flex wrap="nowrap" as="ul" overflowX="scroll">
        {/* {Array(6)
          .fill(null)
          .map((_) => (
            <BookCard></BookCard>
          ))} */}
      </Flex>
    </Box>
  );
};

export default BookBoard;
