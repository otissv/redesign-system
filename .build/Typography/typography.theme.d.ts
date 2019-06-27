import { TypographyInterface } from './typography.types';
export declare function typographyTheme({ theme: { animation } }: TypographyInterface): {
    transition: any;
};
export declare function typographyAppearanceTheme({ appearance, theme: { color }, }: TypographyInterface): {
    color: any;
} | {
    color?: undefined;
};
export declare function typographyModifyTheme({ modify, theme: { color, font }, }: TypographyInterface): {
    fontSize: string;
    fontWeight: number;
    color?: undefined;
} | {
    fontSize: string;
    color: any;
    fontWeight?: undefined;
} | {
    fontSize?: undefined;
    fontWeight?: undefined;
    color?: undefined;
};
export declare function typographyWrapTheme({ wrap }: TypographyInterface): {
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
    wordWrap?: undefined;
    hyphens?: undefined;
} | {
    wordWrap: string;
    hyphens: string;
    overflow?: undefined;
    textOverflow?: undefined;
    whiteSpace?: undefined;
} | {
    whiteSpace: string;
    overflow?: undefined;
    textOverflow?: undefined;
    wordWrap?: undefined;
    hyphens?: undefined;
} | {
    overflow?: undefined;
    textOverflow?: undefined;
    whiteSpace?: undefined;
    wordWrap?: undefined;
    hyphens?: undefined;
};
export declare function typographyTransformTheme({ textTransform, }: TypographyInterface): {
    textTransform: string;
} | {
    textTransform?: undefined;
};
export declare function typographyTextAlignTheme({ textAlign }: TypographyInterface): {
    textAlign: string;
} | {
    textAlign?: undefined;
};
