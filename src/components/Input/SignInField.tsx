import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import React from 'react';

interface Props {
  name: string;
}

const SignInField: React.FC<Props> = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={(form.errors[name] && form.touched[name]) as boolean}
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
  );
};

export default SignInField;
