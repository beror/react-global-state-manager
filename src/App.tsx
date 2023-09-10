  import { useGlobalState } from './stateManager/StateProvider';

function App() {
  const { state, setState } = useGlobalState();

  return (
    <>
      <h1>State manager test</h1>
      <div className="card">
      <button onClick={() => setState({ ...state, counter: state.counter + 1 })}>
          state.counter is {state.counter}
        </button>
      </div>
    </>
  );
}

export default App;
