import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import React from 'react';

type AddFieldType = 'title' | 'author' | 'date' | 'description';

interface Props {
  name: AddFieldType;
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
            {name === 'description' ? (
              <Textarea variant="filled" size="lg" rows={5} />
            ) : (
              <Input
                {...field}
                type={name}
                id={name}
                placeholder={name}
                variant="filled"
                size="lg"
                focusBorderColor="gray.300"
              />
            )}
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default AddField;
