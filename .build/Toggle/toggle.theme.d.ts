import { ToggleInterface, ToggleInputInterface, ToggleLabelInterface, ToggleContentInterface } from './toggle.types';
export declare function toggleTheme({}: ToggleInterface): {
    display: string;
};
export declare function toggleAppearanceTheme({ appearance, theme: { border, color, unit }, }: ToggleInterface): "" | {
    color: any;
    backgroundColor: any;
    paddingLeft: any;
    paddingRight: any;
    border?: undefined;
} | {
    border: string;
    paddingLeft: any;
    paddingRight: any;
    color?: undefined;
    backgroundColor?: undefined;
};
export declare function toggleInputTheme({ theme: { color } }: ToggleInputInterface): {
    boxSizing: string;
    height: number;
    width: number;
    visibility: string;
    '&:checked + label': {
        background: any;
    };
    '&:checked + label:after': {
        left: string;
        transform: string;
    };
};
export declare function toggleLabelTheme({ theme: { color }, checked, height, hideText, width, }: ToggleLabelInterface): {
    position: string;
    boxSizing: string;
    cursor: string;
    textIndent: string;
    width: string;
    height: string;
    background: any;
    display: string;
    borderRadius: string;
    fontSize: string;
    lineHeight: string;
    textAlign: string;
};
export declare function toggleContentTheme({ theme: { color }, toggle, height, width, }: ToggleContentInterface): {
    position: string;
    boxSizing: string;
    width: string;
    height: string;
    background: any;
    borderRadius: string;
    transform: string;
    transition: string;
    ' &:active': {
        width: string;
    };
};
