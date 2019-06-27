import { AppearanceMinType } from '../theme';
import { BaseInterface } from '../Base';

export type CardContextType = {
  appearance?: AppearanceMinType;
  hover?: boolean;
  collapse?: boolean;
};

export interface CardProviderInteface {
  children?: React.ReactNode;
  value?: CardContextType;
}

export interface CardInterface extends BaseInterface {
  appearance?: AppearanceMinType;
  hover?: boolean;
  collapse: boolean;
}

export interface CardHeaderInterface extends CardInterface {}
export interface CardFooterInterface extends CardInterface {}
