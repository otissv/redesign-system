import React from 'react';
import { AccordionInterface, AccordionContextType } from './accordion.types';
export declare const AccordionContext: React.Context<AccordionContextType>;
export declare function useAccordion(): AccordionContextType;
export declare function AccordionProvider({ animate, children, active, }: AccordionInterface): JSX.Element;
