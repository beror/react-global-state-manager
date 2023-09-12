import { useState } from 'react';

import closureBasedCreateStore from './assets/closureBasedCreateStore.png';
import closureBasedHook from './assets/closureBasedHook.png';
import closureBasedUsage from './assets/closureBasedUsage.png';
import contextBasedGetHookAndStateProvider from './assets/contextBasedGetHookAndStateProvider.png';
import contextBasedStoreCreation from './assets/contextBasedStoreCreation.png';
import contextBasedProvidingState from './assets/contextBasedProvidingState.png';
import contextBasedUsage from './assets/contextBasedUsage.png';
import react18BasedCreateStore from './assets/react18BasedCreateStore.png';
import react18BasedStoreCreation from './assets/react18BasedStoreCreation.png';
import react18BasedUsage from './assets/react18BasedUsage.png';
import githubMark from './assets/github-mark.svg';
import StateShowcase from './components/StateShowcase';

function App() {
  const [ isSameSignHovered, setIsSameSignHovered ] = useState(false);

  return (
    <>
      <h1>State managers showcase</h1>
      <a
        href='https://github.com/beror/react-global-state-manager'
        className='github-mark-anchor'>
        <img src={githubMark} alt='Repository' className='github-mark-image'/>
      </a>

      <main>
        <div className='manager-presentation-box'>
          <h2>Closure-based state manager</h2>
          <img src={closureBasedCreateStore} alt='Showcase of createStore in closure-based state manager' />
          <div className='image-with-text-container'>
            <img src={react18BasedStoreCreation} alt='Showcase of store creation in closure-based state manager' />
            <div
              onMouseEnter={() => setIsSameSignHovered(true)}
              onMouseLeave={() => setIsSameSignHovered(false)}
                className='same-image-sign'
                style={{ backgroundColor: isSameSignHovered ? '#80808080' : 'initial' }}>
                Same
            </div>
          </div>
          <img src={closureBasedHook} alt='Showcase of the hook in closure-based state manager' />
          <img src={closureBasedUsage} alt='Showcase of usage of closure-based state manager' />
          <StateShowcase.ClosureBased />
        </div>

        <div className='manager-presentation-box'>
          <h2>React-18-based state manager</h2>
          <img src={react18BasedCreateStore} alt='Showcase of createStore in React-18-based state manager' />
          <div className='image-with-text-container'>
            <img src={react18BasedStoreCreation} alt='Showcase of store creation in React-18-based state manager' />
            <div
              onMouseEnter={() => setIsSameSignHovered(true)}
              onMouseLeave={() => setIsSameSignHovered(false)}
                className='same-image-sign'
                style={{ backgroundColor: isSameSignHovered ? '#80808080' : 'initial' }}>
                Same
            </div>
          </div>
          <img src={react18BasedUsage} alt='Showcase of usage of React-18-based state manager' />
          <StateShowcase.React18Based />
        </div>

        <div className='manager-presentation-box'>
          <h2>Context-based state manager</h2>
          <img src={contextBasedGetHookAndStateProvider} alt='Showcase of getting the state accessor hook and state provider of Context-based state manager' />
          <img src={contextBasedStoreCreation} alt='Showcase of store creation in Context-based state manager' />
          <img src={contextBasedProvidingState} alt='Showcase of providing the state of Context-based state manager to the application' />
          <img src={contextBasedUsage} alt='Showcase of usage of context-based state manager' />
          <StateShowcase.ContextBased />
        </div>
      </main>
    </>
  );
}

export default App;
