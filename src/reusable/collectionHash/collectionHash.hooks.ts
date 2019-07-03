import { useMemo, useEffect, useState } from 'react';

export function useGetActiveItem<T>(hook: any) {
  const [state, setState] = useState<T>();

  const { active, items } = hook();

  useEffect(() => {
    if (items && items[active]) {
      setState(items[active]);
    }
  }, [active, items]);

  return useMemo(() => state, [state]);
}

export function useGetItems(hook: any) {
  const { items, itemsToArray } = hook();
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(itemsToArray(state));
  }, [items]);

  return useMemo(() => state, [state]);
}

export function useResetActive(hook: any) {
  const { active, dispatch } = hook();

  useEffect(() => {
    if (active === '') return;

    dispatch({
      type: 'SET_ACTIVE',
      active: '',
    });
  }, []);
}

export function useSetActive(hook: any, value: any) {
  const { active, dispatch } = hook();

  useEffect(() => {
    if (active === value) return;
    dispatch({
      type: 'SET_ACTIVE',
      active: value,
    });
  }, [active, value]);
}
