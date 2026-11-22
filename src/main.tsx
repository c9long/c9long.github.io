import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './components/portfolio.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio config={CONFIG} />
  </React.StrictMode>,
);
