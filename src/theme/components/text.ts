import { Theme } from 'theme-ui';
import { ExactTheme } from '..';

export const text: Theme['text'] = {
    default: {
        color: (theme: ExactTheme) => theme.colors.text,
        fontSize: (theme: ExactTheme) => theme.fontSizes.body,
    },
    caps: {
        variant: 'text.default',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
    },
    error: {
        variant: 'text.default',
        color: (theme: ExactTheme) => theme.colors.error,
    },
};
