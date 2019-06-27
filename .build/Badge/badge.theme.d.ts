import { BadgeInterface } from './badge.types';
export declare function badgeTheme({ theme: { border, color } }: BadgeInterface): {
    display: string;
    fontWeight: number;
    padding: string;
    fontSize: string;
    lineHeight: number;
    textAlign: string;
    whiteSpace: string;
    verticalAlign: string;
    borderRadius: string;
    color: any;
    background: any;
    border: string;
};
export declare function badgeAppearanceTheme({ appearance, theme: { color, border }, }: BadgeInterface): {
    color: any;
    background: any;
    border: string;
} | {
    color?: undefined;
    background?: undefined;
    border?: undefined;
};
export declare function badgePillTheme({ pill }: BadgeInterface): {
    paddingRight: string;
    paddingLeft: string;
    borderRadius: string;
} | {
    paddingRight?: undefined;
    paddingLeft?: undefined;
    borderRadius?: undefined;
};
