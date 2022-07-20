import React from 'react';
import { Text as ThemeUiText, TextProps as ThemeUiTextProps } from 'theme-ui';

export type TextProps = ThemeUiTextProps;

export function Text(props: TextProps): JSX.Element {
    return <ThemeUiText {...props} />;
}
