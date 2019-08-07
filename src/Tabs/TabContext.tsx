import React, { useContext, useMemo } from 'react'
import { useCollectionHashReducer } from '../reusable/collectionHash'

import {
  TabsContextType,
  TabsProviderInterface,
  TabsInitialStateInterface,
} from './tabs.types'

export const TabContext = React.createContext<TabsContextType>({})

export function useTabs() {
  return useContext(TabContext)
}

export const TabProvider = React.memo(function TabProvider({
  active,
  selected = {},
  children,
  stacked,
  ...propsRest
}: TabsProviderInterface) {
  const initialState: TabsInitialStateInterface = {
    active,
    items: [],
    selected: [],
    stacked,
  }

  const [collection, dispatch] = useCollectionHashReducer(initialState)

  const context = useMemo(() => ({ ...collection, dispatch, ...propsRest }), [
    collection,
    dispatch,
    propsRest,
  ])

  return <TabContext.Provider value={context}>{children}</TabContext.Provider>
})

export default TabContext
