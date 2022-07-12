import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui';
import * as themeUiComponentStyles from './components';
import * as markdownStyles from './markdown';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makeTheme = <T extends Theme>(t: T) => t;

export const theme = makeTheme({
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: {
        body: '16px',
        heading: '24px',
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#33e',
        secondary: '#e33',
    },
    ...themeUiComponentStyles,
    styles: markdownStyles,
});

export type ExactTheme = typeof theme;

export interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
    theme: ExactTheme;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
