import {
  AspectRatio,
  Box,
  ChakraProps,
  GridItem,
  Img,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookInfo } from '../../app/modules/book/types';

interface Props {
  book: Partial<BookInfo>;
}

const BookCard: React.FC<Props & ChakraProps> = ({ book }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  return (
    <Link to={{ pathname: `/book/${book._id}`, state: book }}>
      <GridItem
        as="figure"
        borderRadius="10px"
        mr="4"
        userSelect="none"
        border="1px solid"
        borderColor={colorMode === 'light' ? 'gray.100' : 'background.100'}
        flexDirection="column"
      >
        <AspectRatio ratio={3 / 3} overflow="hidden" borderTopRadius="10px">
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
    </Link>
  );
};

export default BookCard;
