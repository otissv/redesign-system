export type StackType = 'LIFO' | 'FIFO'

export type StackActionType<T> = {
  type: 'ADD_TO_STACK' | 'REMOVE_FROM_STACK' | 'TAKE_STACK_ITEM'
  payload?: T
}
