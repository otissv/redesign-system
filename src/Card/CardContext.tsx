import React, { useContext } from 'react';
import { CardContextType, CardProviderInteface } from './card.types';

export const CardContext = React.createContext<CardContextType>({});

export function useCard() {
  return useContext(CardContext);
}

export function CardProvider({ children, value }: CardProviderInteface) {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
