import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';
import React from 'react';
import {
    Button as ThemeUiButton,
    ButtonProps as ThemeUiButtonProps,
} from 'theme-ui';

// Base Layer pass through. Expectation is that variants / other theme-ui props are abstracted away
// Alternative is to have Button not be exposed and act as an internal button to build against

export type ButtonProps = ThemeUiButtonProps & AriaButtonProps;

export function Button(props: ButtonProps): JSX.Element {
    const ref = React.useRef();
    const { buttonProps } = useButton(props, ref);
    return (
        <ThemeUiButton {...props} {...buttonProps} ref={ref}>
            {props.children}
        </ThemeUiButton>
    );
}
