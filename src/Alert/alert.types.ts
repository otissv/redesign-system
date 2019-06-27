import { AppearanceType } from '../theme';
import { BaseInterface } from '../Base';

export interface AlertInterface extends BaseInterface {
  appearance?: AppearanceType;
  stretch?: boolean;
  onClose?: any;
}
