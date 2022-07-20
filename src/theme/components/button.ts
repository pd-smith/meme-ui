import { Theme } from 'theme-ui';
import { ExactTheme } from '..';

export const buttons: Theme['buttons'] = {
    primary: {
        color: (theme: ExactTheme) => theme.colors.background,
        cursor: 'pointer',
        bg: (theme: ExactTheme) => theme.colors.primary,
        '&:hover': {
            bg: (theme: ExactTheme) => theme.colors.secondary,
        },
    },
    secondary: {
        color: (theme: ExactTheme) => theme.colors.background,
        cursor: 'pointer',
        bg: (theme: ExactTheme) => theme.colors.secondary,
        '&:hover': {
            bg: (theme: ExactTheme) => theme.colors.primary,
        },
    },
};
