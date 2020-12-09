import React, { useEffect } from 'react';
import BookBoard from '../components/organism/BookBoard';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';
import { useDispatch } from 'react-redux';
import { getBooks } from '../redux/modules/book/actions';
import BookService from '../services/Book';

interface Props {}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(BookService.fetch()));
  }, [dispatch]);

  return (
    <>
      <Layout>
        <SideBar />
        <BookBoard />
      </Layout>
      <footer></footer>
    </>
  );
};

export default Home;
