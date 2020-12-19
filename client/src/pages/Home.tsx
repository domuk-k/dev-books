import React, { useEffect } from 'react';
import BookBoard from '../components/organism/BookBoard';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { startGetBooks } from '../app/modules/book/saga/saga';
import { CombinedState } from '../app/modules';
import { Redirect } from 'react-router-dom';
import { AuthInfo } from '../app/modules/auth/types';
import { useColorModeValue } from '@chakra-ui/react';

interface Props {}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useSelector<CombinedState, AuthInfo | null>(
    state => state.auth.user
  );

  useEffect(() => {
    dispatch(startGetBooks());
  }, [dispatch]);

  return (
    <>
      {user ? (
        <Layout>
          <SideBar />
          <BookBoard />
        </Layout>
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default Home;
