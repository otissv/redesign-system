import { ThemeInterface } from '../theme';

export interface ThemeProviderInterface {
  children?: React.ReactNode;
  theme?: ThemeInterface;
}
