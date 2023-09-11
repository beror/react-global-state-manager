import { Action, createStore } from '../../stateManagers/react18Based/stateManager';

export const initialState = {
  counter: 0,
};

export enum COUNTER_ACTIONS {
  INCREMENT,
  DECREMENT
}

const counterReducer = (action: Action<COUNTER_ACTIONS>, state = initialState) => {
  switch(action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { counter: state.counter + 1 };

    case COUNTER_ACTIONS.DECREMENT:
      return { counter: state.counter - 1 };

    default: return state;
  }
};

const store = createStore(counterReducer);

export default store;