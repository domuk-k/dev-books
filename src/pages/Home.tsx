import React from 'react';
import BookBoard from '../components/organism/BookBoard';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';

interface Props {}

const Home: React.FC<Props> = () => {
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
