import { either } from './either.util';
import { ThemeInterface } from '../theme';

export const setTheme = (propsTheme: ThemeInterface, theme: ThemeInterface) =>
  either(propsTheme, theme)(propsTheme);
