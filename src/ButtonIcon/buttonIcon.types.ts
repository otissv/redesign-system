import { ButtonInterface } from '../Button';
import { IconInterface } from '../Icon';

export interface ButtonIconInterface extends ButtonInterface {
  alt: string;
  dimension?: string;
  icon?: (props: IconInterface) => JSX.Element;
  iconProps?: IconInterface;
  title?: string;
  uid?: string;
}
