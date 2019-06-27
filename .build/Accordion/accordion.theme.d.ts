import { AccordionInterface, AccordionButtonInterface, AccordionIconInterface, AccordionContentInterface, AccordionItemInterface } from './accordion.types';
export declare function accordionTheme({ theme: { animation } }: AccordionInterface): {
    flex: number;
    listStyleType: string;
    margin: number;
    padding: number;
    transition: any;
};
export declare function accordionButtonTheme({}: AccordionButtonInterface): {
    textAlign: string;
    borderRadius: number;
};
export declare function accordionIconTheme({ active, theme: { animation, unit }, }: AccordionIconInterface): {
    float: string;
    padding: any;
    transform: string;
    transition: any;
};
export declare function accordionContentTheme({ theme: { animation }, }: AccordionContentInterface): {
    overflow: string;
    padding: number;
    transition: any;
};
export declare function accordionItemTheme({ theme: { animation }, }: AccordionItemInterface): {
    cursor: string;
    display: string;
    lineHeight: number;
    margin: number;
    overflow: string;
    padding: number;
    textAlign: string;
    transition: any;
};
