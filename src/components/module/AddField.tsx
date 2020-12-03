import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import React from 'react';

interface Props {
  name: 'title' | 'author' | 'date' | 'description';
}

const AddField: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <FormControl
            isInvalid={(form.errors[name] && form.touched[name]) as boolean}
            isRequired={name === 'title' || name === 'author'}
          >
            <FormLabel htmlFor={name}>{name}</FormLabel>
            <Input
              {...field}
              id={name}
              placeholder={name}
              type={name}
              variant="filled"
              size="lg"
              focusBorderColor="gray.300"
            />

            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default AddField;
