import { useState, useEffect } from 'react';

import store from '../../stores/closureBased/store';

export const useGlobalState = <State>(getState: () => State) => {
  const [ state, setState ] = useState(getState);

  useEffect(() => store.subscribe(() => setState(getState())), []);

  return state;
};