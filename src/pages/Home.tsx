import {
  Button,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import BookBoard from '../components/organism/BookBoard';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <BookBoard />
      <footer></footer>
    </>
  );
};

export default Home;
