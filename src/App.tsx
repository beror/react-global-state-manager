import { useState } from 'react';

import { useGlobalState as useContextBasedGlobalState } from './stateManagers/contextBased/StateProvider';
import { useGlobalState as useClosureBasedGlobalState } from './stateManagers/closureBased/hooks';
import { useGlobalState as useReact18BasedGlobalState } from './stateManagers/react18Based/hooks';
import closureBasedStore, { counterActions as closureBasedCounterActions } from './stores/closureBased/store';
import react18BasedStore, {counterActions as react18BasedCounterActions } from './stores/react18Based/store';

import closureBasedCreateStore from './assets/closureBasedCreateStore.png';
import closureBasedHook from './assets/closureBasedHook.png';
import closureBasedUsage from './assets/closureBasedUsage.png';
import contextBasedStateProvider from './assets/contextBasedStateProvider.png';
import contextBasedProvidingState from './assets/contextBasedProvidingState.png';
import contextBasedUsage from './assets/contextBasedUsage.png';
import react18BasedHook from './assets/react18BasedHook.png';
import react18BasedUsage from './assets/react18BasedUsage.png';

function App() {
  const counter = useClosureBasedGlobalState(state => state.counter);
  const { state, setState } = useContextBasedGlobalState();
  const counterReact18 = useReact18BasedGlobalState(state => state.counter);

  const [ isSameSignHovered, setIsSameSignHovered ] = useState(false);

  return (
    <>
      <h1>State manager showcase</h1>

      <main>
        <div className='manager-presentation-box'>
          <h2>Closure-based state manager (main)</h2>
          <div className='image-with-text-container'>
            <img src={closureBasedCreateStore} alt='Showcase of createStore in closure-based state manager' />
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
          <button onClick={() => closureBasedStore.dispatch(closureBasedCounterActions.increment)}>
            counter is {counter}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>Context-based state manager</h2>
          <img src={contextBasedStateProvider} alt='Showcase of state provider in context-based state manager' />
          <img src={contextBasedProvidingState} alt='Showcase of providing the state in context-based state manager' />
          <img src={contextBasedUsage} alt='Showcase of usage of context-based state manager' />
          <button onClick={() => setState({ ...state, counter: state.counter + 1 })}>
            state.counter is {state.counter}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>React-18-based state manager</h2>
          <div className='image-with-text-container'>
            <img src={closureBasedCreateStore} alt='Showcase of createStore in React-18-based state manager' />
            <div
              onMouseEnter={() => setIsSameSignHovered(true)}
              onMouseLeave={() => setIsSameSignHovered(false)}
                className='same-image-sign'
                style={{ backgroundColor: isSameSignHovered ? '#80808080' : 'initial' }}>
                Same
            </div>
          </div>
          <img src={react18BasedHook} alt='Showcase of the hook in React-18-based state manager' />
          <img src={react18BasedUsage} alt='Showcase of usage of React-18-based state manager' />
          <button onClick={() => react18BasedStore.dispatch(react18BasedCounterActions.increment)}>
            counterReact18 is {counterReact18}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
