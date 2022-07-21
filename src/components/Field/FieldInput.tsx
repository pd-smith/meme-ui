import React from 'react';
import { Field, FieldProps } from './Field';
import { Input } from '../Input';

export type FieldInputProps = Omit<FieldProps<typeof Input>, 'as'>;

export function FieldInput(props: FieldInputProps): JSX.Element {
    return <Field as={Input} {...props} />;
}
