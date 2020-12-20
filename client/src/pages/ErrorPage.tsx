import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const ErrorPage: React.FC<Props> = props => {
  return (
    <Box color="gray">
      <h1>어맛 페이지가 없어요</h1>
      <Link to="/"> 홈으로</Link>
    </Box>
  );
};

export default ErrorPage;
