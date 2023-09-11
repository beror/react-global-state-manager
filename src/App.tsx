import { useGlobalState } from './stateManagers/closureBased/hooks';
import store, { counterActions } from './stores/closureBased/store';

function App() {
  const counter = useGlobalState(state => state.counter);

  return (
    <>
      <h1>State manager test</h1>
      <div className="card">
      <button onClick={() => store.dispatch(counterActions.increment)}>
          counter is {counter}
        </button>
      </div>
    </>
  );
}

export default App;
