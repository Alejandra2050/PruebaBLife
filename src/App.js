import React from 'react';
import './App.css';
import { Menu } from './componets/Menu';
import { Card } from './componets/Card';




function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Menu/>
    <Card/>
      </header>
    </div>
  );
}

export default App;
