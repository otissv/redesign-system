import { ThemeInterface } from '../theme';

export interface BaseInterface {
  animate?: { [key: string]: any };
  children?: React.ReactNode;
  css?: string;
  as?: string;
  state?: string;
  className?: string;
  theme?: ThemeInterface;
  themed?: Array<(props: ThemeInterface | any) => { [key: string]: any }>;
  [key: string]: any;
}
