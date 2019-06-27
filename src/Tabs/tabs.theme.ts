import {
  TabsInterface,
  TabsListInterface,
  TabListButtonInterface,
  TabPanelInterface,
} from './tabs.types';

export function tabsTheme({ stacked }: TabsInterface) {
  return {
    display: 'flex',
    flexDirection: stacked ? 'row' : 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'stretch',
    alignContent: 'stretch',
  };
}

export function tabsListButtonTheme({ item }: TabListButtonInterface) {
  return item
    ? {
        width: 'auto',
        flex: 'none',
      }
    : {};
}

export function tabsListTheme({  }: TabsListInterface) {
  return {
    overflow: 'auto hidden',
    whiteSpace: 'nowrap',
  };
}

export function tabsPanelTheme({  }: TabPanelInterface) {
  return {
    overflow: 'hidden auto',
    flex: 1,
  };
}
