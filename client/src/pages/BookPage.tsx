import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { BookInfo } from '../app/modules/book/types';
import SiderBar from '../components/module/SideBar';
import Layout from '../Layout';

interface Props extends RouteChildrenProps {}

const BookPage: React.FC<Props> = ({ location }) => {
  const book = location?.state as BookInfo;
  return (
    <Layout>
      <SiderBar />
      <Container py={8} px={8} m={0} maxW="100wv">
        <Heading>{book.title}</Heading>
        <Flex mt={9}>
          <AspectRatio ratio={3 / 4} minW="200px">
            <Img src={book.imgURL} alt={book.imgAlt} borderRadius="8px" />
          </AspectRatio>
          <Flex px="6">
            <Text>{book.description}</Text>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
};

export default BookPage;
