export type CollectionHashType =
  | 'INSERT_ITEMS'
  | 'REDUCER'
  | 'REMOVE_ITEMS'
  | 'REPLACE_ITEMS'
  | 'RESET'
  | 'SET_ACTIVE'
  | 'SET_LOADING'
  | 'SET_SELECTED'
  | 'TOGGLE_SELECTED_ITEMS'
  | 'UPDATE_ITEM';

export interface CollectionHashInitialValueInterface {
  active?: string;
  items?: any[];
  loading?: boolean;
  selected?: any[];
  uid?: string;
}

export interface CollectionHashStateInterface {
  active?: string;
  items?: { [key: string]: any };
  loading?: boolean;
  selected?: any[];
  uid?: string;
}

export type BuildInitialValueType = <T>(initialState: T) => T;

export type CreateInitialStateType = <T>(initialState: T) => T;

export type ReducerType = <S, A>(state: S, Actions?: A) => S;

export interface CollectionHashActionInterface {
  active?: string;
  item?: any;
  items?: any[];
  loading?: boolean;
  reducer?: <S, A>(state: S, Actions?: A) => S;
  remove?: any[];
  select?: string;
  selected?: any[];
  type: CollectionHashType;
  uid?: string;
  update?: any;
}

export type CollectionHashReducerType = (
  initialState: CollectionHashInitialValueInterface,
  extendReducer?: <S, A>(state: S, actions?: A) => S
) => [CollectionHashStateInterface, React.Dispatch<any>];

export type ItemsToArrayType = (items: { [key: string]: any }) => any[];
