import {
  Container,
  Button,
  Text,
  HStack,
  Center,
  Box,
  VStack,
  useColorMode,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { CombinedState } from '../app/modules';
import { logout } from '../app/modules/auth/actions';
import { emailCheckState } from '../app/modules/auth/reducer';
import {
  startEmailCheck,
  startLogin,
  startLogout,
} from '../app/modules/auth/saga/saga';
import { AuthState } from '../app/modules/auth/types';
import Logo from '../components/atom/Logo';
import SignInErrorMessage from '../components/atom/SigninErrorMessage';
import SignInField from '../components/module/SignInField';
import authInfoSchema from '../utils/authInfoSchema';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [isSmallerThanMobile] = useMediaQuery('(max-width: 500px)');

  const { loading, user, emailCheck, error } = useSelector<
    CombinedState,
    Partial<AuthState>
  >(state => state.auth);

  const initialValues: FormikValues = { email: '', password: '' };

  const modeValue = useColorModeValue('gray.50', 'gray.700');
  if (user !== null) return <Redirect to="/" />;
  return (
    <Center h="100vh">
      <Box
        bg={isSmallerThanMobile ? 'transparent' : modeValue}
        m="auto"
        rounded="16px"
        py={12}
        boxShadow={isSmallerThanMobile ? 'unset' : 'lg'}
        w="100%"
        maxW="500px"
      >
        <Container centerContent={true} w="100%">
          <VStack spacing="20px" w="360px">
            <Box as="header" textAlign="center">
              <Logo logoType={0} />
              <Text
                fontSize="1.2rem"
                mt="-2.5"
                textTransform="uppercase"
                color="gray.500"
              >
                Read as you are
              </Text>
            </Box>

            <Formik
              initialValues={initialValues}
              validationSchema={
                authInfoSchema[
                  emailCheck === emailCheckState.SUCCESS
                    ? 'signIn'
                    : 'mailCheck'
                ]
              }
              onSubmit={(values, actions) => {
                emailCheck === emailCheckState.SUCCESS
                  ? dispatch(startLogin(values))
                  : dispatch(startEmailCheck(values));
              }}
            >
              {(props: FormikProps<FormikValues>) => (
                <Box as={Form} w="100%" noValidate={true}>
                  <VStack>
                    <SignInField name="email" />
                    {emailCheck === emailCheckState.SUCCESS && (
                      <SignInField name="password" />
                    )}
                  </VStack>
                  <Button
                    mt={4}
                    w="100%"
                    bg={colorMode === 'light' ? 'brandLight' : 'brandDark'}
                    isLoading={
                      emailCheck === emailCheckState.LOADING || loading
                    }
                    type="submit"
                    color="currentcolor"
                  >
                    Log in
                  </Button>
                  <SignInErrorMessage
                    fontSize="1em"
                    emailCheck={emailCheck}
                    error={error}
                  />
                </Box>
              )}
            </Formik>
            <Box>Sign up for devBooks</Box>
          </VStack>
        </Container>
      </Box>
    </Center>
  );
};

export default SignIn;
