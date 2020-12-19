import {
  Container,
  Button,
  Text,
  HStack,
  Center,
  Box,
  VStack,
  FormControl,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { CombinedState } from '../app/modules';
import { startEmailCheck, startLogin } from '../app/modules/auth/saga/saga';
import { AuthState } from '../app/modules/auth/types';
import Logo from '../components/atom/Logo';
import SignInField from '../components/module/SignInField';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [isSmallerThanMobile] = useMediaQuery('(max-width: 500px)');

  const { user, emailChecked, checkingEmail } = useSelector<
    CombinedState,
    Partial<AuthState>
  >(state => state.auth);

  const initialValues: FormikValues = { email: '', password: '' };

  if (user !== null) return <Redirect to="/" />;
  return (
    <Center h="100vh">
      <Box
        bg={
          isSmallerThanMobile
            ? 'transparent'
            : colorMode === 'light'
            ? 'gray.50'
            : 'gray.700'
        }
        m="auto"
        rounded="16px"
        px={2}
        py={12}
        boxShadow={isSmallerThanMobile ? 'unset' : 'lg'}
      >
        <Container centerContent={true}>
          <VStack>
            <Logo fontSize="90px" />
            <Text as="h1" mt={4} textAlign="center">
              <Text d="inline-block" fontWeight="800" letterSpacing="-2px">
                devooks
              </Text>
              <Text
                textTransform="uppercase"
                fontSize=".4em"
                color="gray.500"
                mt="-5px"
                mb="8px"
              >
                Read as you are
              </Text>
            </Text>
          </VStack>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              emailChecked
                ? dispatch(startLogin(values))
                : dispatch(startEmailCheck(values));
            }}
          >
            {(props: FormikProps<FormikValues>) => (
              <Box as={Form} w="100%" maxW="260px" noValidate={true}>
                <VStack>
                  <SignInField name="email" />
                  {emailChecked === true && <SignInField name="password" />}
                  {emailChecked === false && <Redirect to="/signUp" />}
                </VStack>
                <Button
                  mt={4}
                  w="100%"
                  bg={colorMode === 'light' ? 'brandLight' : 'brandDark'}
                  isLoading={!!checkingEmail}
                  type="submit"
                  color="currentcolor"
                >
                  Log in
                </Button>
              </Box>
            )}
          </Formik>

          <HStack spacing="2" mt="5">
            <Link to="/signUp">Sign up for devBooks</Link>
          </HStack>
        </Container>
      </Box>
    </Center>
  );
};

export default SignIn;
