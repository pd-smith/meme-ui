import React from 'react';
import {
    Input as ThemeUiInput,
    InputProps as ThemeUiInputProps,
} from 'theme-ui';

// Pretty sure this should be just be internal and we expose things like TextInput, NumberInput, etc so that we can build react-aria stuff easily

export type InputProps = ThemeUiInputProps;

export function Input(props: InputProps): JSX.Element {
    return <ThemeUiInput {...props} />;
}
