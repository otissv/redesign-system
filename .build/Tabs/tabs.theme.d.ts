import { TabsInterface, TabsListInterface, TabListButtonInterface, TabPanelInterface } from './tabs.types';
export declare function tabsTheme({ stacked }: TabsInterface): {
    display: string;
    flexDirection: string;
    justifyContent: string;
    overflow: string;
    alignItems: string;
    alignContent: string;
};
export declare function tabsListButtonTheme({ item }: TabListButtonInterface): {
    width: string;
    flex: string;
} | {
    width?: undefined;
    flex?: undefined;
};
export declare function tabsListTheme({}: TabsListInterface): {
    overflow: string;
    whiteSpace: string;
};
export declare function tabsPanelTheme({}: TabPanelInterface): {
    overflow: string;
    flex: number;
};
