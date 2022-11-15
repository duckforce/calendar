import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Calendar from './lib';


const App = () => {
  const [value, setValue] = useState<string[]>([]);
  return <Calendar type='range' selected={value} onChange={setValue} />;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
