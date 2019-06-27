import { IconInterface } from './icon.types';
export declare function iconTheme({ hoverColor }: IconInterface): {
    '&:hover': {
        color: string;
    };
    display: string;
    color: string;
    fill: string;
    height: string;
    position: string;
};
export declare function iconAppearanceTheme({ appearance, theme: { color }, }: IconInterface): {
    color: any;
    '&:hover': {
        color: any;
    };
} | {
    color?: undefined;
    '&:hover'?: undefined;
};
