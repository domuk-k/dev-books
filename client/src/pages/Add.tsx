import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { DateInput } from '../components/atom/DateInput';
import React from 'react';
import AddField from '../components/module/AddField';
import SideBar from '../components/module/SideBar';
import Layout from '../Layout';
import { BookInfo } from '../app/modules/book/types';
import { useDispatch, useSelector } from 'react-redux';
import { startAddBook } from '../app/modules/book/saga/saga';
import { CombinedState } from '../app/modules';
import { Redirect } from 'react-router-dom';
import { AuthState } from '../app/modules/auth/types';

interface Props {}

class formInitialValue implements Partial<BookInfo> {
  public title = '';
  public author = '';
  public date = new Date();
  public isPrivate = false;
  public imageURL = '';
  public imageAlt = '';
  public description = '';
}

const Add: React.FC<Props> = () => {
  const initialValue = new formInitialValue();
  const dispatch = useDispatch();
  const { user } = useSelector<CombinedState, Partial<AuthState>>(
    state => state.auth
  );

  return user ? (
    <Layout>
      <SideBar />
      <Formik
        initialValues={initialValue}
        onSubmit={values => {
          dispatch(startAddBook({ ...values, owner: user?._id }));
        }}
      >
        {props => (
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
                  <DateInput name="date" />

                  <AddField name="description" />
                  <Flex direction="row" justifyContent="space-between" w="100%">
                    <Field>
                      {({ field }: FieldProps) => (
                        <FormControl as={Flex} alignContent="center">
                          <Checkbox
                            {...field}
                            name="isPrivate"
                            id="isPrivate"
                            mr="3"
                          />
                          <FormLabel
                            htmlFor="isPrivate"
                            userSelect="none"
                            m="0"
                            lineHeight="2.4rem"
                          >
                            비밀로 하기
                          </FormLabel>
                        </FormControl>
                      )}
                    </Field>

                    <Button type="submit" alignSelf="flex-end">
                      Add
                    </Button>
                  </Flex>
                </VStack>
              </Form>
            </Box>
          </Center>
        )}
      </Formik>
    </Layout>
  ) : (
    <Redirect to="/" />
  );
};

export default Add;
