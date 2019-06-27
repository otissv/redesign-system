import React from 'react';
import { CardContextType, CardProviderInteface } from './card.types';
export declare const CardContext: React.Context<CardContextType>;
export declare function useCard(): CardContextType;
export declare function CardProvider({ children, value }: CardProviderInteface): JSX.Element;
