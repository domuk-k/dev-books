import React, { useEffect } from 'react';
import BookBoard from '../components/organism/BookBoard';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { startGetBooks } from '../app/modules/book/saga/saga';
import { CombinedState } from '../app/modules';

interface Props {}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: CombinedState) => state.book.books);

  useEffect(() => {
    dispatch(startGetBooks());
  }, [dispatch]);

  // return user ?? <Redirect to='/signin'/>;
  return (
    <>
      <Layout>
        <SideBar />
        <BookBoard books={books} />
      </Layout>
    </>
  );
};

export default Home;
