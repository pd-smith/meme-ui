import { ThemeUIStyleObject } from 'theme-ui';
import { ExactTheme } from '..';

export const a: ThemeUIStyleObject = {
    fontFamily: (theme: ExactTheme) => theme.fonts.body,
};
