import { AppearanceExtendedType } from '../theme';
import { BaseInterface } from '../Base';

export interface BadgeInterface extends BaseInterface {
  appearance?: AppearanceExtendedType;
  pill: boolean;
}
