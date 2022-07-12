import { Global } from '@emotion/react';
import { ExactTheme } from '../..';

export function GlobalStyles(): JSX.Element {
    return (
        <Global
            styles={(theme: ExactTheme) => ({
                '*': {
                    boxSizing: 'border-box',
                    fontFamily: theme.fonts.body,
                },
            })}
        />
    );
}
