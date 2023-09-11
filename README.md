# What is this?

This repo has 2 implementations of a global state manager for React in the `src/stateManagers` folder:
- a closure-based one (the main one)
- a React-Context-based one

# See the demo

Clone the repo -> `npm i` -> `npm run dev` -> go to `localhost:5173`

# The closure-based one

`createStore` uses a closure inside of which it declares the state object. It returns a store object that provides `getState`, `dispatch`, `subscribe` functions.

Then there's the `useGlobalState` hook that puts the store state into `useState` and creates a subscription to the store that calls `setState` with the current state. The subscriptio listeners are called every time the store receives an action (after updating the state via the reducer).

\
This one resembles Redux a lot

# The React-Context-based one

This one is very thin wrapper around a Context instance. It creates a context, creates the provider via a HOC that has a state. This HOC returns its children wrapped in the context provider where it provides the state and its setter.

Example of updating the global state:\
`setState({ ...state, counter: state.counter + 1 })`