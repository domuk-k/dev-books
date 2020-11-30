import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Home: React.FC<Props> = props => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/signin">signin</Link>
      <Link to="/add">add</Link>
    </>
  );
};

export default Home;
