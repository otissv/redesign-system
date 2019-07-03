import { AppearanceLimitedType } from '../theme';
import { BaseInterface } from '../Base';
import { ButtonIconInterface } from '../ButtonIcon';

export type ToastContextType = {
  notifications?: ToastMessageInterface[];
  setNotification?: React.Dispatch<React.SetStateAction<any>>;
};

export type positionType =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right';

export interface ToastMessageInterface {
  id: string;
  message: string;
  appearance?: AppearanceLimitedType;
  component?: any;
}

export interface ToastInterface extends BaseInterface {
  appearance?: AppearanceLimitedType;
  messages: ToastMessageInterface[];
  position?: positionType;
  timeout?: number;
  children?: any[];
}

export interface ToastNotificationInterface extends BaseInterface {
  appearance?: AppearanceLimitedType;
  position?: positionType;
  items?: any;
  uid?: string;
  notifications?: ToastMessageInterface[];
}

export interface ToastNotificationCloseInterface extends ButtonIconInterface {
  uid?: string;
  onClose?: (e: React.MouseEvent<HTMLElement>) => {};
}
