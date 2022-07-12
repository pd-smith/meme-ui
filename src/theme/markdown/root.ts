import { ThemeUIStyleObject } from 'theme-ui';
import { ExactTheme } from '..';

export const root: ThemeUIStyleObject = {
    fontFamily: (theme: ExactTheme) => theme.fonts.body,
    fontSize: (theme: ExactTheme) => theme.fontSizes.body,
};
