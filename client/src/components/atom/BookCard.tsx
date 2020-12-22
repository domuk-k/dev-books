import {
  AspectRatio,
  Box,
  ChakraProps,
  Flex,
  GridItem,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { BookInfo } from '../../app/modules/book/types';

interface Props {
  book: BookInfo;
}

const BookCard: React.FC<Props & ChakraProps> = ({ book }) => {
  const { colorMode } = useColorMode();
  return (
    <GridItem
      as="figure"
      borderRadius="10px"
      mr="4"
      userSelect="none"
      border="1px solid"
      borderColor={colorMode === 'light' ? 'gray.100' : 'background.100'}
      flexDirection="column"
    >
      <AspectRatio
        ratio={3 / 4}
        maxH="240px"
        overflow="hidden"
        borderTopRadius="10px"
      >
        <Img
          objectFit="contain"
          objectPosition="top"
          src={book.imgURL}
          alt={book.title}
        />
      </AspectRatio>
      <Box p="5" pt="2">
        <Text as="h3">{book.title}</Text>
        <Text>{book.author}</Text>
      </Box>
    </GridItem>
  );
};

export default BookCard;
