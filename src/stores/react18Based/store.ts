import { Action, createStore } from '../../stateManagers/react18Based/stateManager';

export const initialState = {
  counter1: 0,
  counter2: 0,
};

export enum COUNTER_ACTIONS {
  INCREMENT_COUNTER_1,
  DECREMENT_COUNTER_1,
  INCREMENT_COUNTER_2,
  DECREMENT_COUNTER_2,
}

const counterReducer = (action: Action<COUNTER_ACTIONS>, state = initialState): typeof initialState => {
  switch(action.type) {
    case COUNTER_ACTIONS.INCREMENT_COUNTER_1:
      return { ...state, counter1: state.counter1 + 1 };

    case COUNTER_ACTIONS.DECREMENT_COUNTER_1:
      return { ...state, counter1: state.counter1 - 1 };

    case COUNTER_ACTIONS.INCREMENT_COUNTER_2:
      return { ...state, counter2: state.counter2 + 1 };

    case COUNTER_ACTIONS.DECREMENT_COUNTER_2:
      return { ...state, counter2: state.counter2 - 1 };

    default: return state;
  }
};

const store = createStore(counterReducer);

export default store;