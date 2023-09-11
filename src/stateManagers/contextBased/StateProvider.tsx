import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type SetState<T> = Dispatch<SetStateAction<T>>;

interface StateProviderProps {
  children: JSX.Element;
}

interface StateProviderContext<T> {
  globalState: T;
  setGlobalState: SetState<T> | (() => void);
}

export const getHookAndStateProvider = <T,>(initialState: T) => {
  const StateContext = createContext<StateProviderContext<T>>({
    globalState: initialState,
    setGlobalState: () => {}
  });

  return [
    () => useContext(StateContext),
    ({ children }: StateProviderProps) => {
      const [ globalState, setGlobalState ] = useState(initialState);

      return (
        <StateContext.Provider value={{globalState, setGlobalState}}>
          {children}
        </StateContext.Provider>
      );
    }
  ] as const;
};