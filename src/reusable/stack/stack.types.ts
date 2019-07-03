export type StackType = 'LIFO' | 'FIFO';

export type StackActionType<T> = {
  type: 'ADD_TO_STACK' | 'REMOVE_FROM_STACK';
  payload: T;
};
