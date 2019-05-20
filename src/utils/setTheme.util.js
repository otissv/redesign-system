import { either } from './either.util';

export const setTheme = (propsTheme, theme) => either(propsTheme, theme)(propsTheme);
