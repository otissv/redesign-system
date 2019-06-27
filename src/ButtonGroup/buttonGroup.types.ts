import { AppearanceType } from '../theme';
import { ButtonInterface } from '../Button';

export interface ButtonGroupInterface extends ButtonInterface {
  children?: React.ReactNode;
  appearance?: AppearanceType;
  stretch?: boolean;
  size?: number;
  stacked?: boolean;
}

export interface ButtonGroupButtonInterface extends ButtonInterface {
  children?: React.ReactNode;
  appearance?: AppearanceType;
  stretch?: boolean;
  size?: number;
}
