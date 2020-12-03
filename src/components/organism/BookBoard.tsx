import {
  Badge,
  Box,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import BookCard from '../atom/BookCard';

interface Props {}

const BookBoard: React.FC<Props> = props => {
  const book = {
    id: Math.floor(Math.random() * 100),
    title: '프로그래밍 타입스크립트',
    author: 'Boris Cherny',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/41yafGMO%2BrL._AC_SY400_.jpg',
    imageAlt: '이미지대체텍스트',
    description: '이 책은 타입스크립트을 이해하는 데 좋습니다',
  };
  return (
    <Box as="main" overflowX="hidden">
      <Box as="header" flexGrow={1}>
        <Text as="h1">둘러보기</Text>
      </Box>
      <Flex wrap="nowrap" as="ul" overflowX="scroll">
        {Array(6)
          .fill(null)
          .map(_ => (
            <BookCard>
              <Image boxSize="100%" src={book.imageURL} alt={book.imageAlt} />
              <Box p={2} pt={5}>
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="red">
                    new
                  </Badge>
                  <Box
                    as="h3"
                    ml="2"
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                  >
                    {book.author} &bull;
                  </Box>
                </Box>
                <Box as="h2" isTruncated={true}>
                  {book.title}
                </Box>
                <Text>{book.description}</Text>
              </Box>
            </BookCard>
          ))}
      </Flex>
    </Box>
  );
};

export default BookBoard;
