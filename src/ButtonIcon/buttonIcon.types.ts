import { ButtonInterface } from '../Button';
import { IconInterface } from '../Icon';

export interface ButtonIconInterface extends ButtonInterface {
  alt: string;
  dimension?: string;
  icon?: (props: IconInterface) => JSX.Element;
  title?: string;
  uid?: string;
}
