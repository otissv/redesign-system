import { BaseInterface } from '../Base';
import { AppearanceMinType } from '../theme';

export type PositionType =
  | 'fixed'
  | 'absolute'
  | 'sticky'
  | 'static'
  | 'relative';

export interface AppBarInterface extends BaseInterface {
  appearance?: AppearanceMinType;
  position?: PositionType;
}
