import { useSyncExternalStore } from 'react';

import store from '../../stores/react18Based/store';

export const useGlobalState = selector => selector(useSyncExternalStore(store.subscribe, store.getState));