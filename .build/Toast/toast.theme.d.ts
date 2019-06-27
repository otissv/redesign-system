import { ToastInterface } from './toast.types';
export declare function toastTheme({ theme: { animation, border, font, unit }, }: ToastInterface): {
    position: string;
    top: any;
    left: any;
    lineHeight: number;
    cursor: string;
    borderRadius: string;
    zIndex: number;
    width: string;
    transition: any;
};
export declare function toastPositionTheme({ position, theme: { unit }, }: ToastInterface): {
    left: any;
    right: string;
    top?: undefined;
} | {
    right: any;
    left: string;
    top?: undefined;
} | {
    top: any;
    left: any;
    right: string;
} | {
    top: number;
    right: any;
    left: string;
} | {
    left?: undefined;
    right?: undefined;
    top?: undefined;
};
export declare function toastNotificationTheme({ theme: { color, elevate, unit }, }: ToastInterface): {
    position: string;
    background: any;
    width: string;
    minHeight: string;
    marginTop: string;
    zIndex: string;
    boxShadow: string;
    padding: any;
};
export declare function toastNotificationCloseButtonTheme({ theme: { color }, }: ToastInterface): {
    position: string;
    top: number;
    right: number;
    background: string;
    borderColor: string;
    color: any;
    padding: number;
    margin: string;
    '&:hover': {
        background: string;
        borderColor: string;
        color: any;
    };
    '&:active': {
        background: string;
        borderColor: string;
        color: any;
    };
};
export declare function toastNotificationAppearanceTheme({ appearance, theme: { color, border }, }: ToastInterface): {
    border: string;
    color: any;
    borderLeft?: undefined;
    background?: undefined;
} | {
    borderLeft: string;
    color: any;
    border?: undefined;
    background?: undefined;
} | {
    background: any;
    border: string;
    color?: undefined;
    borderLeft?: undefined;
} | {
    border: string;
    color?: undefined;
    borderLeft?: undefined;
    background?: undefined;
} | {
    borderLeft: string;
    border?: undefined;
    color?: undefined;
    background?: undefined;
} | {
    border?: undefined;
    color?: undefined;
    borderLeft?: undefined;
    background?: undefined;
};
