import { useState, useEffect, useRef } from 'react';

import { useGlobalState as useContextBasedGlobalState } from './stores/contextBased/store';
import { useGlobalState as useClosureBasedGlobalState } from './stateManagers/closureBased/hooks';
import closureBasedStore, { COUNTER_ACTIONS as closureBasedCounterActions } from './stores/closureBased/store';
import react18BasedStore, { COUNTER_ACTIONS as react18BasedCounterActions } from './stores/react18Based/store';

import closureBasedCreateStore from './assets/closureBasedCreateStore.png';
import closureBasedHook from './assets/closureBasedHook.png';
import closureBasedUsage from './assets/closureBasedUsage.png';
import contextBasedGetHookAndStateProvider from './assets/contextBasedGetHookAndStateProvider.png';
import contextBasedStoreCreation from './assets/contextBasedStoreCreation.png';
import contextBasedProvidingState from './assets/contextBasedProvidingState.png';
import contextBasedUsage from './assets/contextBasedUsage.png';
import react18BasedCreateStore from './assets/react18BasedCreateStore.png';
import react18BasedStoreCreation from './assets/react18BasedStoreCreation.png';
import react18BasedUsage from './assets/react18BasedUsage.png';
import githubMark from './assets/github-mark.svg';

function App() {
  const {
    counter1: counter1ClosureBased,
    counter2: counter2ClosureBased
  } = useClosureBasedGlobalState(closureBasedStore.getState);
  const [
    derivedStateFromClosureBasedStates,
    setDerivedStateFromClosureBasedStates
  ] = useState(counter1ClosureBased + counter2ClosureBased);

  const counter1ClosureBasedButtonRef = useRef<HTMLButtonElement>(null);
  const counter2ClosureBasedButtonRef = useRef<HTMLButtonElement>(null);
  const derivedStateClosureBasedButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDerivedStateFromClosureBasedStates(counter1ClosureBased + counter2ClosureBased);
  }, [counter1ClosureBased, counter2ClosureBased]);

  useEffect(() => {
    if(counter1ClosureBasedButtonRef.current) {
      appendRerenderSign(counter1ClosureBasedButtonRef.current);
    }
  }, [counter1ClosureBased]);

  useEffect(() => {
    if(counter2ClosureBasedButtonRef.current) {
      appendRerenderSign(counter2ClosureBasedButtonRef.current);
    }
  }, [counter2ClosureBased]);

  useEffect(() => {
    if(derivedStateClosureBasedButtonRef.current) {
      appendRerenderSign(derivedStateClosureBasedButtonRef.current);
    }
  }, [derivedStateFromClosureBasedStates]);


  const {
    counter1: counter1React18Based,
    counter2: counter2React18Based
  } = react18BasedStore.useGlobalState();
  const [
    derivedStateFromReact18BasedStates,
    setDerivedStateFromReact18BasedStates
  ] = useState(counter1React18Based + counter2React18Based);

  useEffect(() => {
    setDerivedStateFromReact18BasedStates(counter1React18Based + counter2React18Based);
  }, [counter1React18Based, counter2React18Based]);

  const counter1React18BasedButtonRef = useRef<HTMLButtonElement>(null);
  const counter2React18BasedButtonRef = useRef<HTMLButtonElement>(null);
  const derivedStateReact18BasedButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(counter1React18BasedButtonRef.current) {
      appendRerenderSign(counter1React18BasedButtonRef.current);
    }
  }, [counter1React18Based]);

  useEffect(() => {
    if(counter2React18BasedButtonRef.current) {
      appendRerenderSign(counter2React18BasedButtonRef.current);
    }
  }, [counter2React18Based]);

  useEffect(() => {
    if(derivedStateReact18BasedButtonRef.current) {
      appendRerenderSign(derivedStateReact18BasedButtonRef.current);
    }
  }, [derivedStateFromReact18BasedStates]);


  const {
    globalState: contextBasedGlobalState,
    setGlobalState: setContextBasedGlobalState
  } = useContextBasedGlobalState();
  const [
    derivedStateFromContextBasedStates,
    setDerivedStateFromContextBasedStates
  ] = useState(contextBasedGlobalState.counter1 + contextBasedGlobalState.counter2);

  const counter1ContextBasedButtonRef = useRef<HTMLButtonElement>(null);
  const counter2ContextBasedButtonRef = useRef<HTMLButtonElement>(null);
  const derivedStateContextBasedButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(counter1ContextBasedButtonRef.current) {
      appendRerenderSign(counter1ContextBasedButtonRef.current);
    }
  }, [contextBasedGlobalState.counter1]);

  useEffect(() => {
    if(counter2ContextBasedButtonRef.current) {
      appendRerenderSign(counter2ContextBasedButtonRef.current);
    }
  }, [contextBasedGlobalState.counter2]);

  useEffect(() => {
    if(derivedStateContextBasedButtonRef.current) {
      appendRerenderSign(derivedStateContextBasedButtonRef.current);
    }
  }, [derivedStateFromContextBasedStates]);
  
  useEffect(() => {
    setDerivedStateFromContextBasedStates(contextBasedGlobalState.counter1 + contextBasedGlobalState.counter2);
  }, [contextBasedGlobalState.counter1, contextBasedGlobalState.counter2]);


  const [ isSameSignHovered, setIsSameSignHovered ] = useState(false);

  const appendRerenderSign = (element: HTMLElement) => {
    const rerenderSignElement = document.createElement('span');
    rerenderSignElement.classList.add('test');
    element.appendChild(rerenderSignElement);
    setTimeout(() => element.removeChild(rerenderSignElement), 900);
  };

  return (
    <>
      <h1>State managers showcase</h1>
      <a
        href='https://github.com/beror/react-global-state-manager'
        className='github-mark-anchor'>
        <img src={githubMark} alt='Repository' className='github-mark-image'/>
      </a>

      <main>
        <div className='manager-presentation-box'>
          <h2>Closure-based state manager</h2>
          <img src={closureBasedCreateStore} alt='Showcase of createStore in closure-based state manager' />
          <div className='image-with-text-container'>
            <img src={react18BasedStoreCreation} alt='Showcase of store creation in closure-based state manager' />
            <div
              onMouseEnter={() => setIsSameSignHovered(true)}
              onMouseLeave={() => setIsSameSignHovered(false)}
                className='same-image-sign'
                style={{ backgroundColor: isSameSignHovered ? '#80808080' : 'initial' }}>
                Same
            </div>
          </div>
          <img src={closureBasedHook} alt='Showcase of the hook in closure-based state manager' />
          <img src={closureBasedUsage} alt='Showcase of usage of closure-based state manager' />
          <button
            onClick={() => closureBasedStore.dispatch({ type: closureBasedCounterActions.INCREMENT_COUNTER_1 })}
            ref={counter1ClosureBasedButtonRef}>
            counter 1: {counter1ClosureBased}
          </button>
          <button
            onClick={() => closureBasedStore.dispatch({ type: closureBasedCounterActions.INCREMENT_COUNTER_2 })}
            ref={counter2ClosureBasedButtonRef}>
            counter 2: {counter2ClosureBased}
          </button>
          <button disabled ref={derivedStateClosureBasedButtonRef}>
            Derived state (sum): {derivedStateFromClosureBasedStates}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>React-18-based state manager</h2>
          <img src={react18BasedCreateStore} alt='Showcase of createStore in React-18-based state manager' />
          <div className='image-with-text-container'>
            <img src={react18BasedStoreCreation} alt='Showcase of store creation in React-18-based state manager' />
            <div
              onMouseEnter={() => setIsSameSignHovered(true)}
              onMouseLeave={() => setIsSameSignHovered(false)}
                className='same-image-sign'
                style={{ backgroundColor: isSameSignHovered ? '#80808080' : 'initial' }}>
                Same
            </div>
          </div>
          <img src={react18BasedUsage} alt='Showcase of usage of React-18-based state manager' />
          <button
            onClick={() => react18BasedStore.dispatch({ type: react18BasedCounterActions.INCREMENT_COUNTER_1 })}
            ref={counter1React18BasedButtonRef}>
            counter 1: {counter1React18Based}
          </button>
          <button
            onClick={() => react18BasedStore.dispatch({ type: react18BasedCounterActions.INCREMENT_COUNTER_2 })}
            ref={counter2React18BasedButtonRef}>
            counter 2: {counter2React18Based}
          </button>
          <button disabled ref={derivedStateReact18BasedButtonRef}>
            Derived state (sum): {derivedStateFromReact18BasedStates}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>Context-based state manager</h2>
          <img src={contextBasedGetHookAndStateProvider} alt='Showcase of getting the state accessor hook and state provider of Context-based state manager' />
          <img src={contextBasedStoreCreation} alt='Showcase of store creation in Context-based state manager' />
          <img src={contextBasedProvidingState} alt='Showcase of providing the state of Context-based state manager to the application' />
          <img src={contextBasedUsage} alt='Showcase of usage of context-based state manager' />
          <button
            onClick={() => setContextBasedGlobalState({
              ...contextBasedGlobalState,
              counter1: contextBasedGlobalState.counter1 + 1
            })}
            ref={counter1ContextBasedButtonRef}>
            counter 1: {contextBasedGlobalState.counter1}
          </button>
          <button
            onClick={() => setContextBasedGlobalState({
              ...contextBasedGlobalState,
              counter2: contextBasedGlobalState.counter2 + 1
            })}
            ref={counter2ContextBasedButtonRef}>
            counter 2: {contextBasedGlobalState.counter2}
          </button>
          <button disabled ref={derivedStateContextBasedButtonRef}>
            Derived state (sum): {derivedStateFromContextBasedStates}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
