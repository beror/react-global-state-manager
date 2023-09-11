import { createStore } from '../../stateManagers/closureBased/stateManager';

export const initialState = {
  counter: 0,
};

export const counterActions = {
  increment: { type: 'INCREMENT' },
  decrement: { type: 'DECREMENT' },
} as const;

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case counterActions.increment.type:
      return { counter: state.counter + 1 };

    case counterActions.decrement.type:
      return { counter: state.counter - 1 };

    default: return state;
  }
};

const store = createStore(counterReducer);

export default store;