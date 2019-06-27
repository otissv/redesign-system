import React from 'react';
import { AccordionItemInterface, AccordionItemContextType } from './accordion.types';
export declare const AccordionItemContext: React.Context<AccordionItemContextType>;
export declare function useAccordionItem(): AccordionItemContextType;
declare function AccordionItem({ children, className, uid, themed, ...propsRest }: AccordionItemInterface): JSX.Element;
declare namespace AccordionItem {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default AccordionItem;
export default AccordionItem;
