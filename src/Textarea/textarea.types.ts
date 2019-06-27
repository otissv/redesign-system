import { AppearanceExtendedType } from '../theme';
import { BaseInterface } from '../Base';

export interface TextAreaInterface extends BaseInterface {
  appearance?: AppearanceExtendedType;
  active?: boolean;
  widths?: number;
}
