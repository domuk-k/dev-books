import {
  Container,
  Button,
  Box,
  Image,
  Text,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/atom/Logo';
import SignInField from '../components/module/SignInField';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const { colorMode } = useColorMode();
  const initialValues: FormikValues = { email: '', password: '' };
  return (
    <Box mt={10}>
      <Container centerContent={true}>
        <Logo fontSize="220px" colorMode={colorMode} />
        <Text as="h1" mt={'-30px'}>
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
          {props => (
            <Form
              noValidate={true}
              style={{ width: 'clamp(30vw, 460px, 50vw)' }}
            >
              <SignInField name="email" />
              <SignInField name="password" />
              <Button
                mt={4}
                w="100%"
                colorScheme="red"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
        <HStack spacing="4" mt="5">
          <Link to="/">forgot password?</Link>
          <Link to="/">Sign up for devBooks</Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default SignIn;
