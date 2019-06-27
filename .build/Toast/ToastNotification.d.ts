/// <reference types="react" />
import { ToastNotificationInterface } from './toast.types';
declare function ToastNotification({ animate, children, className, notifications, onClose, themed, ...propsRest }: ToastNotificationInterface): JSX.Element;
declare namespace ToastNotification {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default ToastNotification;
export default ToastNotification;
