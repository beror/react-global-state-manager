import { useState, useEffect } from 'react';

import store from '../../stores/closureBased/store';

export const useGlobalState = (selector) => {
  const [ state, setState ] = useState(selector(store.getState()));

  useEffect(() => store.subscribe(() => {
    const _state = selector(store.getState());
    return setState(_state);
  }), []);

  return state;
};