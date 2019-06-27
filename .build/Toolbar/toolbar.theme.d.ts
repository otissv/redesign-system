import { ToolbarInterface } from './toolbar.types';
export declare function toolbarTheme({ theme: { color } }: ToolbarInterface): {
    paddingLeft: number;
    paddingRight: number;
    minHeight: string;
    background: string;
    '>button': {
        color: any;
        background: string;
        borderColor: any;
        borderRadius: number;
        '&:active': {
            color: any;
        };
    };
    '.ToolbarViewsContainer': {
        'button:first-child': {
            borderTopLeftRadius: number;
            borderBottomLeftRadius: number;
        };
        'button:last-child': {
            borderTopRightRadius: number;
            borderBottomRightRadius: number;
        };
    };
};
