import React from 'react';
import { Box, ChakraProps } from '@chakra-ui/react';
import { emailCheckState } from '../../app/modules/auth/reducer';

interface Props extends ChakraProps {
  emailCheck?: string;
  error?: Error | null;
}

const SignInErrorMessage: React.FC<Props> = ({
  emailCheck,
  error,
  ...props
}) => {
  return (
    <Box
      pt="2"
      w="100%"
      h="16px"
      textAlign="center"
      color="orangered"
      whiteSpace="nowrap"
      {...props}
    >
      {emailCheck === emailCheckState.ERROR && <Box>서버가 불안정합니다</Box>}
      {emailCheck === emailCheckState.FAIL && (
        <Box>가입된 이메일이 아닙니다. 회원가입해주세요</Box>
      )}
      {error?.message.includes('Wrong password') && (
        <Box>계정정보가 일치하지 않습니다. 다른 비밀번호를 입력하세요</Box>
      )}
      {error?.message.includes('Network') && <Box>서버가 불안정합니다</Box>}
      {error?.message.includes('failed') && <Box>일치하는 계정이 없습니다</Box>}
    </Box>
  );
};

export default SignInErrorMessage;
