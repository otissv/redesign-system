import { useReducer } from 'react';
import { COLLECTION_HASH_INITIAL_STATE } from './collectionHashConstants';
import {
  BuildInitialValueType,
  CollectionHashActionInterface,
  CollectionHashInitialValueInterface,
  CollectionHashReducerType,
  CollectionHashStateInterface,
  ReducerType,
  ItemsToArrayType,
} from './collectionHash.types';

const buildInitialValue: BuildInitialValueType = initialState => ({
  ...COLLECTION_HASH_INITIAL_STATE,
  ...initialState,
});

export const createInitialState: BuildInitialValueType = initialState =>
  buildInitialValue(initialState);

export const itemsToArray: ItemsToArrayType = function itemsToArray(items) {
  let list = [];

  for (let item in items) {
    list.push(items[item]);
  }

  return list;
};

export const useCollectionHashReducer: CollectionHashReducerType = function useCollectionHashReducer(
  initialState,
  extendReducer = state => state
) {
  const initialValue: CollectionHashInitialValueInterface = buildInitialValue(
    initialState
  );

  function removeItem(list: { [key: string]: string }, itemsToRemove: any[]) {
    let items: { [key: string]: string } = {};

    for (let item in list) {
      if (!itemsToRemove.includes(item)) {
        items[item] = list[item];
      }
    }

    return items;
  }

  function transformCollectionToObject(items: any[]) {
    if (!Array.isArray(items)) {
      return undefined;
    }

    const reducer = (acc: { [key: string]: string }, item: any) => ({
      ...acc,
      [item[initialValue.uid]]: item,
    });
    return items.reduce(reducer, {});
  }

  function reducer(
    state: CollectionHashStateInterface,
    action: CollectionHashActionInterface,
    initialValue: CollectionHashInitialValueInterface,
    extendReducer: ReducerType
  ) {
    const notArray = (value: any) => !Array.isArray(value);
    const notString = (value: any) => typeof value !== 'string';
    const notDefined = (value: any) => value == null;

    switch (action.type) {
      case 'INSERT_ITEMS': {
        const items = Array.isArray(action.items)
          ? transformCollectionToObject(action.items)
          : {
              [action.items[initialValue.uid]]: action.items,
            };
        return {
          ...state,
          items: {
            ...state.items,
            ...items,
          },
        };
      }

      case 'REDUCER': {
        return action.reducer(state);
      }

      case 'REMOVE_ITEMS': {
        if (notArray(action.remove)) {
          return state;
        }

        return {
          ...state,
          active: action.remove.includes(state.active) ? '' : state.active,
          selected: state.selected.filter(
            item => !action.remove.includes(item)
          ),
          items: removeItem(state.items, action.remove),
        };
      }

      case 'REPLACE_ITEMS': {
        const transformedData = transformCollectionToObject(action.items);
        return {
          ...state,
          items: transformedData,
        };
      }

      case 'RESET': {
        return initialValue;
      }

      case 'SET_ACTIVE': {
        if (notString(action.active)) {
          return state;
        }

        return {
          ...state,
          active: notDefined(action.active) ? '' : action.active.trim(),
        };
      }

      case 'SET_LOADING': {
        return {
          ...state,
          loading: !!action.loading,
        };
      }

      case 'SET_SELECTED': {
        return {
          ...state,
          selected: action.selected,
        };
      }

      case 'TOGGLE_SELECTED_ITEMS': {
        let selected = [...state.selected];

        for (let select of action.selected) {
          const index = selected.indexOf(select);
          const _select = select.trim();

          if (state.items[index]) {
            selected =
              index === 0
                ? selected.slice(1)
                : index === selected.length - 1
                ? selected.slice(0, selected.length - 1)
                : [...selected.slice(0, index), ...selected.slice(index + 1)];
          } else {
            selected.push(_select);
          }
        }

        return {
          ...state,
          selected,
        };
      }

      case 'UPDATE_ITEM': {
        if (!state.items[action.select]) {
          return state;
        }

        const item = {
          [action.item.name || action.select]: {
            ...state.items[action.select],
            ...action.item,
          },
        };

        const updateItemInList = () => ({
          ...state.items,
          ...item,
        });

        let removeCloneAndUpdateItem = () => ({
          ...removeItem(state.items, [action.select]),
          ...item,
        });

        const updatedItems = action.item[initialValue.uid]
          ? removeCloneAndUpdateItem()
          : updateItemInList();

        const setSelectedItem = (list: any[], item: any, update: any) => {
          const replaceSelectedItem = () => {
            const index = list.indexOf(item);
            return index === 0
              ? [update, ...list.slice(1)]
              : index === list.length - 1
              ? [...list.slice(0, list.length - 1), update]
              : [...list.slice(0, index), update, ...list.slice(index + 1)];
          };

          return state.selected.includes(action.select)
            ? replaceSelectedItem()
            : state.selected;
        };

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
        };
      }

      default:
        return extendReducer ? extendReducer(state, action) : state;
    }
  }

  function crudReducer(
    state: CollectionHashStateInterface,
    action: CollectionHashActionInterface
  ) {
    return reducer(state, action, initialValue, extendReducer);
  }

  return useReducer(crudReducer, initialValue);
};
