import { useMemo, useReducer } from 'react'
import { COLLECTION_HASH_INITIAL_STATE } from './collectionHashConstants'

const buildInitialValue = initialState => ({
  ...COLLECTION_HASH_INITIAL_STATE,
  ...initialState,
})

export const createInitialState = initialState =>
  buildInitialValue(initialState)

export function itemsToArray(items) {
  let list = []

  for (let item in items) {
    list.push(items[item])
  }

  return list
}

export function useCollectionHashReducer(extendReducer, initialState) {
  const initialValue = buildInitialValue(initialState)

  function removeItem(list, itemsToRemove) {
    let items = {}

    for (let item in list) {
      if (!itemsToRemove.includes(item)) {
        items[item] = list[item]
      }
    }

    return items
  }

  function transformCollectionToObject(items) {
    if (!Array.isArray(items)) {
      return
    }

    const reducer = (acc, item) => ({
      ...acc,
      [item[initialValue.uid]]: item,
    })
    return items.reduce(reducer, {})
  }

  function reducer(state, action, initialValue, extendReducer) {
    const notArray = value => !Array.isArray(value)
    const notString = value => typeof value !== 'string'
    const notDefined = value => value == null

    switch (action.type) {
      case 'INSERT_ITEMS': {
        const items = Array.isArray(action.items)
          ? transformCollectionToObject(action.items)
          : {
              [action.items[initialValue.uid]]: action.items,
            }
        return {
          ...state,
          items: {
            ...state.items,
            ...items,
          },
        }
      }

      case 'REDUCER': {
        return action.reducer(state)
      }

      case 'REMOVE_ITEMS': {
        if (notArray(action.remove)) {
          return state
        }

        return {
          ...state,
          active: action.remove.includes(state.active) ? '' : state.active,
          selected: state.selected.filter(
            item => !action.remove.includes(item)
          ),
          items: removeItem(state.items, action.remove),
        }
      }

      case 'REPLACE_ITEMS': {
        const transformedData = transformCollectionToObject(action.items)
        return {
          ...state,
          items: transformedData,
        }
      }

      case 'RESET': {
        return initialValue
      }

      case 'SET_ACTIVE': {
        if (notString(action.active)) {
          return state
        }

        return {
          ...state,
          active: notDefined(action.active) ? '' : action.active.trim(),
        }
      }

      case 'SET_LOADING': {
        return {
          ...state,
          loading: !!action.loading,
        }
      }

      case 'SET_SELECTED': {
        return {
          ...state,
          selected: action.selected,
        }
      }

      case 'TOGGLE_SELECTED_ITEMS': {
        let selected = [...state.selected]

        for (let select of action.selected) {
          const index = selected.indexOf(select)
          const _select = select.trim()

          if (state.items[index]) {
            selected =
              index === 0
                ? selected.slice(1)
                : index === selected.length - 1
                ? selected.slice(0, selected.length - 1)
                : [...selected.slice(0, index), ...selected.slice(index + 1)]
          } else {
            selected.push(_select)
          }
        }

        return {
          ...state,
          selected,
        }
      }

      case 'UPDATE_ITEM': {
        if (!state.items[action.select]) {
          return state
        }

        const item = {
          [action.item.name || action.select]: {
            ...state.items[action.select],
            ...action.item,
          },
        }

        const updateItemInList = () => ({
          ...state.items,
          ...item,
        })

        let removeCloneAndUpdateItem = () => ({
          ...removeItem(state.items, [action.select]),
          ...item,
        })

        const updatedItems = action.item[initialValue.uid]
          ? removeCloneAndUpdateItem()
          : updateItemInList()

        const setSelectedItem = (list, item, update) => {
          const replaceSelectedItem = () => {
            const index = list.indexOf(item)
            return index === 0
              ? [update, ...list.slice(1)]
              : index === list.length - 1
              ? [...list.slice(0, list.length - 1), update]
              : [...list.slice(0, index), update, ...list.slice(index + 1)]
          }

          return state.selected.includes(action.select)
            ? replaceSelectedItem()
            : state.selected
        }

        return {
          ...state,
          active:
            state.active === action.select ? action.item.name : state.active,
          selected: setSelectedItem(
            state.selected,
            action.select,
            action.item.name
          ),
          items: updatedItems,
        }
      }

      default:
        return extendReducer ? extendReducer(state, action) : state
    }
  }

  function crudReducer(state, action) {
    return reducer(state, action, initialValue, extendReducer)
  }

  return useReducer(crudReducer, initialValue)
}
