import React from 'react';
import { TabsContextType, TabsProviderInterface } from './tabs.types';
export declare const TabContext: React.Context<TabsContextType>;
export declare function useTabs(): TabsContextType;
export declare function TabProvider({ active, selected, children, stacked, ...propsRest }: TabsProviderInterface): JSX.Element;
export default TabContext;
