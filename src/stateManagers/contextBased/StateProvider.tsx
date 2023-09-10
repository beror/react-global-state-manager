import { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

export const StateProvider = ({ initialState, children }) => {
  const [ state, setState ] = useState(initialState);

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(StateContext);
};