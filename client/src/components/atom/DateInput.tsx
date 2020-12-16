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

export const DateInput: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Field name="date">
      {({ form }: FieldProps) => (
        <FormControl
          isInvalid={(form.errors.date && form.touched.date) as boolean}
        >
          <FormLabel htmlFor="date">target date</FormLabel>
          <Input
            as={DatePicker}
            variant="filled"
            id="date"
            placeholder="date"
            type="date"
            size="lg"
            w="100%"
            focusBorderColor="gray.300"
            selected={startDate}
            onChange={(date: unknown) => setStartDate(date as Date)}
          />
          <FormErrorMessage>{form.errors.date}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
