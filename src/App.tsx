import React from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Desktop />
      <Taskbar />
    </div>
  );
}

export default App;