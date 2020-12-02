import {
  Container,
  Button,
  Text,
  HStack,
  Center,
  Box,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/atom/Logo';
import SignInField from '../components/module/SignInField';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const initialValues: FormikValues = { email: '', password: '' };
  const { colorMode } = useColorMode();
  return (
    <Center py={40}>
      <Box
        bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}
        m="auto"
        rounded="16px"
        px={2}
        py={12}
        boxShadow="lg"
      >
        <Container centerContent={true}>
          <Logo fontSize="90px" />
          <Text as="h1" mt={4}>
            Wilkommen zu{' '}
            <Text d="inline-block" py={4} fontWeight="800" letterSpacing="-2px">
              devooks
            </Text>
          </Text>

          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props: FormikProps<FormikValues>) => (
              <Form
                noValidate={true}
                style={{ width: 'clamp(30vw, 460px, 50vw)' }}
              >
                <VStack>
                  <SignInField name="email" />
                  <SignInField name="password" />
                </VStack>
                <Button
                  mt={6}
                  w="100%"
                  bg="brand"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Log in
                </Button>
              </Form>
            )}
          </Formik>

          <HStack spacing="2" mt="5">
            <Link to="/">forgot password?</Link>
            <Box> &bull;</Box>
            <Link to="/">Sign up for devBooks</Link>
          </HStack>
        </Container>
      </Box>
    </Center>
  );
};

export default SignIn;
