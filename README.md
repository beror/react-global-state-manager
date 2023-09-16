# What is this?

This repo has **3** implementations of a **fully typed global state manager** for React in the `src/stateManagers` folder:
- a closure-based one
- a React-18-based one (uses `useSyncExternalStore` to abstract away some of the implementation of the closure-based one)
- a React-Context-based one (simpler one)

# See the demo

https://beror.github.io/react-global-state-manager/

or

Clone the repo -> `npm i` -> `npm run dev` -> go to `localhost:5173`

# Efficiency, derived states

All 3 state managers make sure not to cause a re-render if their state was not updated. Done with immutability\
So this useEffect fires accorrding to its dependency array correctly:
```javascript
useEffect(() => {
  setDerivedState(counter1 + counter2);
}, [counter1, counter2]);
```

# Explaining each state manager

## The closure-based one

- No need to re-declare the `useGlobalState` hook to make it typed. The hook has to be provided with `store.getState` which makes it possible to type it
- State retrieval: `useGlobalState(store.getState)`
- State update: `store.dispatch({ type: counterActions.INCREMENT_COUNTER })`

`createStore` uses a closure inside of which it declares the state object. It returns a store object that provides `getState`, `dispatch`, `subscribe` functions.

Then there's the `useGlobalState` hook that puts the store state into `useState` and creates a subscription to the store that calls `setState` with the current state. The subscriptio listeners are called every time the store receives an action (after updating the state via the reducer).

\
This one resembles Redux a lot

## The React-18-based one

- No need to re-declare the `useGlobalState` hook to make it typed. The hook is provided as a property on the store object which makes it possible to have it typed right away
- State retrieval: `store.useGlobalState()`
- State update: `store.dispatch({ type: counterActions.INCREMENT_COUNTER })`

This one is called so because it makes use of the `useSyncExternalStore` hook introduced in React 18. This state manager is based on the closure-based one but some of the implementation is abstracted away by the hook.

## The React-Context-based one

- No need to re-declare the `useGlobalState` hook to make it typed. The hook is returned by `getHookAndStateProvider` "factory" that returns [ useGlobalState, StateProvider ] which makes it possible to have it typed right away
- State retrieval: `useGlobalState()`
- State update: `setGlobalState({ ...globalState, counter: globalState.counter + 1 })`