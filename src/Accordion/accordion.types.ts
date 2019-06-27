import { BaseInterface } from '../Base';
import { ButtonInterface } from '../Button';
import { IconInterface } from '../Icon';

export type AccordionContextType = {
  active?: string;
  animate?: { [key: string]: any };
  setActiveItem?: React.Dispatch<React.SetStateAction<any>>;
};

export interface AccordionInterface extends BaseInterface {
  active?: string;
}

export interface AccordionButtonInterface extends ButtonInterface {}

export interface AccordionIconInterface extends IconInterface {
  active?: string;
}

export interface AccordionContentInterface extends BaseInterface {}

export interface AccordionItemInterface extends BaseInterface {
  uid: string;
}

export type AccordionItemContextType = {
  uid: string;
};
