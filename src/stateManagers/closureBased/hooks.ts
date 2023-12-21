import { useState, useEffect } from 'react';

import store from '../../stores/closureBased/store';

export const useGlobalState = <State>(getState: () => State) => {
  const [ state, setState ] = useState(getState); // TODO: shouldn't the initial value be getState(), not getState?

  useEffect(() => store.subscribe(() => setState(getState())), [getState]);

  return state;
};
