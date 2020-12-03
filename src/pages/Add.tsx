import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { DateInput } from '../components/atom/DateInput';
import React, { useState } from 'react';
import AddField from '../components/module/AddField';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';

interface Props {}

interface IinitialValue {
  title: string;
  author: string;
  imageURL: string;
  imageAlt: string;
  description: string;
}
const Add: React.FC<Props> = props => {
  const initialValue: IinitialValue = {
    title: '',
    author: '',
    imageURL: '',
    imageAlt: '',
    description: '',
  };

  return (
    <Layout>
      <SideBar />
      <Formik
        initialValues={initialValue}
        onSubmit={values => {
          console.dir(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Center w="100%">
            <Box
              width={[
                '95%', // 0-30em
                '85%', // 30em-48em
                '360px', // 48em-62em
                '360px', // 62em+
              ]}
            >
              <Form style={{ width: '100%', margin: 'auto' }}>
                <VStack>
                  <AddField name="title" />
                  <AddField name="author" />
                  <DateInput />
                  <Box w="100%">
                    <FormLabel>description</FormLabel>
                    <Textarea />
                  </Box>
                  <Button type="submit" alignSelf="flex-end">
                    Add
                  </Button>
                </VStack>
              </Form>
            </Box>
          </Center>
        )}
      </Formik>
    </Layout>
  );
};

export default Add;
