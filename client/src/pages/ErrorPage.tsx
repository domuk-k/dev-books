import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const ErrorPage: React.FC<Props> = (props) => {
  return (
    <>
      <h1>어맛 페이지가 없어요</h1>
      <a href="/"> 홈으로</a>
    </>
  );
};

export default ErrorPage;
