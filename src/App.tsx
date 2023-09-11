import { useGlobalState as useContextBasedGlobalState } from './stateManagers/contextBased/StateProvider';
import store, { counterActions } from './stores/closureBased/store';
import { useGlobalState as useClosureBasedGlobalState } from './stateManagers/closureBased/hooks';
import closureBasedCreateStore from './assets/closureBasedCreateStore.png';
import closureBasedHook from './assets/closureBasedHook.png';
import closureBasedUsage from './assets/closureBasedUsage.png';
import contextBasedStateProvider from './assets/contextBasedStateProvider.png';
import contextBasedProvidingState from './assets/contextBasedProvidingState.png';
import contextBasedUsage from './assets/contextBasedUsage.png';

function App() {
  const counter = useClosureBasedGlobalState(state => state.counter);
  const { state, setState } = useContextBasedGlobalState();

  return (
    <>
      <h1>State manager showcase</h1>

      <main>
        <div className='manager-presentation-box'>
          <h2>Closure-based state manager (main)</h2>
          <img src={closureBasedCreateStore} alt='Showcase of createStore in closure-based state manager' />
          <img src={closureBasedHook} alt='Showcase of the hook in closure-based state manager' />
          <img src={closureBasedUsage} alt='Showcase of usage in closure-based state manager' />
          <button onClick={() => store.dispatch(counterActions.increment)}>
            counter is {counter}
          </button>
        </div>

        <div className='manager-presentation-box'>
          <h2>Context-based state manager</h2>
          <img src={contextBasedStateProvider} alt='Showcase of state provider in context-based state manager' />
          <img src={contextBasedProvidingState} alt='Showcase of providing the state in context-based state manager' />
          <img src={contextBasedUsage} alt='Showcase of usage in context-based state manager' />
          <button onClick={() => setState({ ...state, counter: state.counter + 1 })}>
            state.counter is {state.counter}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
