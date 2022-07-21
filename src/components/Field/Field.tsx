import React from 'react';
import {
    Field as ThemeUiField,
    FieldProps as ThemeUiFieldProps,
} from 'theme-ui';
import { FieldError } from '../../types/Forms';
import { Input } from '../Input';
import { Text } from '../Text';

// Figure out wtf is happening here
export interface FieldProps<T extends React.ElementType<any>>
    extends ThemeUiFieldProps<T>,
        FieldError {}

// Figure out how to type 'typeof X' where X is all of our known components + whatever
export function Field(props: FieldProps<any>): JSX.Element {
    return (
        <>
            <ThemeUiField as={Input} {...props} />
            {props.error && props.errorMessage ? (
                <Text variant="error">{props.errorMessage}</Text>
            ) : null}
        </>
    );
}

// Underlying components will be in charge of color changing for error / disabled modes, but only thing that's not confirmed is Label color.
