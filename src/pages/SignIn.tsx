import { Container, Button, Box, Image, Text, HStack } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import SignInField from '../components/Input/SignInField';
import jumpingFox from '../jumpingfox.png';
interface Props {}

const SignIn: React.FC<Props> = () => {
  const initialValues: FormikValues = { email: '', password: '' };
  return (
    <Box mt={10}>
      <Container centerContent={true}>
        <Image
          boxSize="230"
          objectFit="cover"
          src={jumpingFox}
          alt="dev-books-logo"
        />
        <Text as="h1" py={8}>
          Login to devBooks
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
              style={{ width: 'clamp(60vw, 560px, 70vw)' }}
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
