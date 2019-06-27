/// <reference types="react" />
import { AppearanceLimitedType } from '../theme';
import { BaseInterface } from '../Base';
import { ButtonIconInterface } from '../ButtonIcon';
export declare type ToastContextType = {
    notifications?: ToastMessageInterface[];
    setNotification?: React.Dispatch<React.SetStateAction<any>>;
};
export declare enum positionEnum {
    bottomCenter = "bottom-center",
    bottomLeft = "bottom-left",
    bottomRight = "bottom-right",
    topCenter = "top-center",
    topLeft = "top-left",
    topRight = "top-right"
}
export interface ToastMessageInterface {
    id: string;
    message: string;
    appearance?: AppearanceLimitedType;
    component?: any;
}
export interface ToastInterface extends BaseInterface {
    appearance?: AppearanceLimitedType;
    messages: ToastMessageInterface[];
    position?: positionEnum;
    timeout?: number;
    children?: any[];
}
export interface ToastNotificationInterface extends BaseInterface {
    appearance?: AppearanceLimitedType;
    position?: positionEnum;
    items?: any;
    uid?: string;
    notifications?: ToastMessageInterface[];
}
export interface ToastNotificationCloseInterface extends ButtonIconInterface {
    uid?: string;
    onClose?: (e: React.MouseEvent<HTMLElement>) => {};
}
