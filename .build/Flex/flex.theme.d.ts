import { FlexInterface } from './flex.types';
export declare function flexTheme({ alignItems, basis, display, grow, justifyContent, shrink, wrap, }: FlexInterface): {
    display: any;
    basis: string;
    grow: string;
    shrink: string;
    justifyContent: string | string[];
    alignItems: string | string[];
    flexWrap: string | string[];
};
export declare function flexDirectionTheme({ direction }: FlexInterface): {
    flexDirection: string;
} | {
    flexDirection?: undefined;
};
