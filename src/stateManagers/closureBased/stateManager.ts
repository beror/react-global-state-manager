export interface Action<Types> {
  type: Types | '@@INIT';
  payload?: unknown;
}

type Listener = (() => void);

export interface Store<ActionTypes, State> {
  getState: () => State;
  dispatch: (action: Action<ActionTypes>) => void;
  subscribe: (newListener: Listener) => () => void;
}

export type Reducer<ActionTypes, State> = (action: Action<ActionTypes>, state?: State) => State;

export const createStore = <ActionTypes, State>(reducer: Reducer<ActionTypes, State>): Store<ActionTypes, State> => {
  let listeners: Listener[] = [];
  let state = reducer({ type: '@@INIT' });

  return {
    getState: () => state,
    dispatch: (action: Action<ActionTypes>) => {
      state = reducer(action, state);

      listeners.forEach(l => l());
    },
    subscribe: (newListener: Listener) => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter(l => l !== newListener);
      };

      return unsubscribe;
    }
  };
};