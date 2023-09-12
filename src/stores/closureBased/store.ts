import { Action, createStore } from '../../stateManagers/closureBased/stateManager';

export const initialState = {
  counter: 0,
  counter2: 0,
};

export enum COUNTER_ACTIONS {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER_2,
  DECREMENT_COUNTER_2,
}

const counterReducer = (action: Action<COUNTER_ACTIONS>, state = initialState): typeof initialState => {
  switch(action.type) {
    case COUNTER_ACTIONS.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case COUNTER_ACTIONS.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };

    case COUNTER_ACTIONS.INCREMENT_COUNTER_2:
      return { ...state, counter2: state.counter2 + 1 };

    case COUNTER_ACTIONS.DECREMENT_COUNTER_2:
      return { ...state, counter2: state.counter2 - 1 };

    default: return state;
  }
};

const store = createStore(counterReducer);

export default store;