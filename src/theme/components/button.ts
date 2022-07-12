import { Theme } from 'theme-ui';

export const buttons: Theme['buttons'] = {
    primary: {
        color: 'background',
        cursor: 'pointer',
        bg: 'primary',
        '&:hover': {
            bg: 'secondary',
        },
    },
    secondary: {
        color: 'background',
        cursor: 'pointer',
        bg: 'secondary',
        '&:hover': {
            bg: 'primary',
        },
    },
};
