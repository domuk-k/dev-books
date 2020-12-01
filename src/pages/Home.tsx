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
import SideBar from '../components/module/SideBar';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Grid templateColumns="90px auto" gap={6}>
        <SideBar />
        <BookBoard />
      </Grid>
      <footer></footer>
    </>
  );
};

export default Home;
