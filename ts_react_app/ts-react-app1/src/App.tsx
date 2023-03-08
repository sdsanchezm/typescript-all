import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterRegularProp from './components/CounterRegularProp';
import CounterType from './components/CounterType';
import CounterInterface from './components/CounterInterface';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button>click here</button>
        <CounterRegularProp number="jamecho!"/>
        <CounterType number="tiche!"/>
        <CounterInterface number="Jara!"/>
      </header>
    </div>
  );
}

export default App;
