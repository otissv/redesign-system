import React, { useContext, useMemo, useState } from 'react'
import cuid from 'cuid'
import { useCollectionHashReducer } from '../reusable/collectionHash'

export const TabContext = React.createContext({})

export function useTabs() {
  return useContext(TabContext)
}

export function TabProvider({ active, selected = {}, children, items = [] }) {
  const initialState = {
    collections: [],
    selected,
    active,
  }

  const [collection, dispatch] = useCollectionHashReducer(null, initialState)

  const context = useMemo(() => ({ ...collection, dispatch }), [
    collection,
    dispatch,
  ])

  return <TabContext.Provider value={context}>{children}</TabContext.Provider>
}
