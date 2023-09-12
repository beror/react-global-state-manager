import { useState, useEffect, useCallback } from 'react';

import StateButton from './StateButton';
import { useGlobalState as useContextBasedGlobalState } from '../stores/contextBased/store';
import { useGlobalState as useClosureBasedGlobalState } from '../stateManagers/closureBased/hooks';
import closureBasedStore, { COUNTER_ACTIONS as closureBasedCounterActions } from '../stores/closureBased/store';
import react18BasedStore, { COUNTER_ACTIONS as react18BasedCounterActions } from '../stores/react18Based/store';

const ClosureBased = () => {
  const { counter1, counter2 } = useClosureBasedGlobalState(closureBasedStore.getState);
  const [ derivedState, setDerivedState ] = useState(counter1 + counter2);

  useEffect(() => {
    setDerivedState(counter1 + counter2);
  }, [counter1, counter2]);

  const counter1ButtonOnClick = useCallback(
    () => closureBasedStore.dispatch({ type: closureBasedCounterActions.INCREMENT_COUNTER_1 }),
    []
  );

  const counter2ButtonOnClick = useCallback(
    () => closureBasedStore.dispatch({ type: closureBasedCounterActions.INCREMENT_COUNTER_1 }),
    []
  );

  return (
    <div className='state-showcase-box'>
      <StateButton onClick={counter1ButtonOnClick}>
        {`counter 1: ${counter1}`}
      </StateButton>
      <StateButton onClick={counter2ButtonOnClick}>
        {`counter 2: ${counter2}`}
      </StateButton>
      <StateButton>
        {`Derived state (sum): ${derivedState}`}
      </StateButton>
    </div>
  );
};

const React18Based = () => {
  const { counter1, counter2 } = react18BasedStore.useGlobalState();
  const [ derivedState, setDerivedState ] = useState(counter1 + counter2);

  useEffect(() => {
    setDerivedState(counter1 + counter2);
  }, [counter1, counter2]);

  const counter1ButtonOnClick = useCallback(
    () => react18BasedStore.dispatch({ type: react18BasedCounterActions.INCREMENT_COUNTER_1 }),
    []
  );
  const counter2ButtonOnClick = useCallback(
    () => react18BasedStore.dispatch({ type: react18BasedCounterActions.INCREMENT_COUNTER_2 }),
    []
  );

  return (
    <div className='state-showcase-box'>
      <StateButton onClick={counter1ButtonOnClick}>
        {`counter 1: ${counter1}`}
      </StateButton>
      <StateButton onClick={counter2ButtonOnClick}>
        {`counter 2: ${counter2}`}
      </StateButton>
      <StateButton>
        {`Derived state (sum): ${derivedState}`}
      </StateButton>
    </div>
  );
};

const ContextBased = () => {
  const { globalState, setGlobalState } = useContextBasedGlobalState();
  const [
    derivedState,
    setDerivedState
  ] = useState(globalState.counter1 + globalState.counter2);

  useEffect(() => {
    setDerivedState(globalState.counter1 + globalState.counter2);
  }, [globalState.counter1, globalState.counter2]);

  const counter1ButtonOnClick = useCallback(
    () => setGlobalState((state) => ({
      ...state,
      counter1: state.counter1 + 1
    })),
    []
  );
  const counter2ButtonOnClick = useCallback(
    () => setGlobalState((state) => ({
      ...state,
      counter2: state.counter2 + 1
    })),
    []
  );

  return (
    <div className='state-showcase-box'>
      <StateButton onClick={counter1ButtonOnClick}>
        {`counter 1: ${globalState.counter1}`}
      </StateButton>
      <StateButton onClick={counter2ButtonOnClick}>
        {`counter 2: ${globalState.counter2}`}
      </StateButton>
      <StateButton>
        {`Derived state (sum): ${derivedState}`}
      </StateButton>
    </div>
  );
};

export default {
  ClosureBased,
  React18Based,
  ContextBased
};