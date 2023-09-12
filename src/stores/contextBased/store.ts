import { getHookAndStateProvider } from "../../stateManagers/contextBased/StateProvider";

export const initialState = {
  counter: 0,
  counter2: 0
};

export const [ useGlobalState, StateProvider ] = getHookAndStateProvider(initialState);