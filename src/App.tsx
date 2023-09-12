import { useState } from 'react';

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

function App() {
  const { counter } = useClosureBasedGlobalState(closureBasedStore.getState);
  const { globalState, setGlobalState } = useContextBasedGlobalState();
  const { counter: counterReact18 } = react18BasedStore.useGlobalState();

  const [ isSameSignHovered, setIsSameSignHovered ] = useState(false);

  return (
    <>
      <h1>State managers showcase</h1>

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
          <button onClick={() => closureBasedStore.dispatch({ type: closureBasedCounterActions.INCREMENT })}>
            counter is {counter}
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
          <button onClick={() => react18BasedStore.dispatch({ type: react18BasedCounterActions.INCREMENT })}>
            counterReact18 is {counterReact18}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>Context-based state manager (simpler)</h2>
          <img src={contextBasedGetHookAndStateProvider} alt='Showcase of getting the state accessor hook and state provider of Context-based state manager' />
          <img src={contextBasedStoreCreation} alt='Showcase of store creation in Context-based state manager' />
          <img src={contextBasedProvidingState} alt='Showcase of providing the state of Context-based state manager to the application' />
          <img src={contextBasedUsage} alt='Showcase of usage of context-based state manager' />
          <button onClick={() => setGlobalState({ ...globalState, counter: globalState.counter + 1 })}>
            state.counter is {globalState.counter}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
