import { TableInterface } from './table.types';
export declare function tableTheme({ condensed, hover, theme: { animation, border, color, unit, elevate }, }: TableInterface): {
    width: string;
    position: string;
    background: any;
    borderCollapse: string;
    transition: any;
    th: {
        position: string;
        top: number;
        zIndex: number;
        background: any;
        textAlign: string;
    };
    'td, th': {
        padding: string;
    };
    td: {
        borderTop: string;
        height: string;
    };
    'tbody tr:hover': {
        background: any;
        boxShadow: string;
    };
};
export declare function tableCaptionTheme({ theme: {} }: TableInterface): {
    height: number;
};
export declare function tableViewsButtonTheme({ theme: {} }: TableInterface): {
    display: string;
    marginLeft: string;
};
