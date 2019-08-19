export type StackType = 'LIFO' | 'FIFO'

export type StackActionType<S> = {
  type:
    | 'ADD_TO_STACK'
    | 'CLEAR_STACK'
    | 'DELETE_FROM_STACK'
    | 'REPLACE_STACK'
    | 'RESET_STACK'
  payload?: S
  replace?: S[]
}
