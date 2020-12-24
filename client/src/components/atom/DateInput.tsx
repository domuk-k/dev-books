import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dateInput.css';

interface Props {
  name: string;
}

export const DateInput: React.FC<Props> = ({ name }) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={(form.errors.date && form.touched.date) as boolean}
        >
          <FormLabel htmlFor="date">target date</FormLabel>
          <Input
            {...field}
            as={DatePicker}
            variant="filled"
            placeholder="date"
            type="date"
            size="lg"
            w="100%"
            focusBorderColor="gray.300"
            selected={form.values.date}
            onChange={(date: unknown) => form.setFieldValue('date', date)}
          />
          <FormErrorMessage>{form.errors.date}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
