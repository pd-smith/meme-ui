import React from 'react';
import { ThemeProvider as ThemeUiThemeProvider } from 'theme-ui';
import { theme } from '../../theme';

export function ThemeProvider({ children }): JSX.Element {
    return (
        <ThemeUiThemeProvider theme={theme}>{children}</ThemeUiThemeProvider>
    );
}
