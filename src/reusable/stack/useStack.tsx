import { useMemo, useReducer } from 'react';
import { StackType, StackActionType } from './stack.types';

export function useStack<T>(
  stackType: StackType = 'LIFO',
  initialState: T[] = []
) {
  const stack = {
    FIFO: {
      add: (state: T[], payload: T) => [...state, payload],

      remove: (state: T[]) =>
        state.length === 0 ? [] : state.slice(1, state.length),

      take: state => state[0],
    },
    LIFO: {
      add: (state: T[], payload: T) => [...state, payload],

      remove: (state: T[]) =>
        state.length === 0 ? [] : state.slice(0, state.length - 1),

      take: (state: T[]) => {
        console.log(state[state.length - 1]);
        return state[state.length - 1];
      },
    },
  }[stackType];

  function reducer(state: T[], action: StackActionType<T>) {
    switch (action.type) {
      case 'ADD_TO_STACK':
        return stack.add(state, action.payload);
      case 'REMOVE_FROM_STACK':
        return stack.remove(state);
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const methods = {
    dispatch,
    add: (payload: T) => {
      dispatch({
        type: 'ADD_TO_STACK',
        payload,
      });
    },
    remove: (payload: T) => {
      dispatch({
        type: 'REMOVE_FROM_STACK',
        payload,
      });
    },
    take: (payload: T) => {
      dispatch({
        type: 'REMOVE_FROM_STACK',
        payload,
      });

      return stack.take(state);
    },
  };

  return useMemo(() => ({ state, ...methods }), [state, methods]);
}

export function useFIFO<T>(initialState: T[] = []) {
  return useStack('FIFO', initialState);
}

export function useLIFO<T>(initialState: T[] = []) {
  return useStack('LIFO', initialState);
}
