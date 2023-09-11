export interface Action<Types> {
  type: Types | '@@INIT';
  payload?: unknown;
}

export type Reducer<ActionTypes, State> = (action: Action<ActionTypes>, state?: State) => State;

export const createStore = <ActionsTypes, State>(reducer: Reducer<ActionsTypes, State>) => {
  let listeners: (() => void)[] = [];
  let state = reducer({ type: '@@INIT' });

  return {
    getState: () => state,
    dispatch: (action: Action<ActionsTypes>) => {
      state = reducer(action, state);

      listeners.forEach(l => l());
    },
    subscribe: (newListener: typeof listeners[0]) => {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter(l => l !== newListener);
      };

      return unsubscribe;
    }
  };
};