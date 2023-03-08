import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterRegularProp from './components/CounterRegularProp';
import CounterType from './components/CounterType';
import CounterInterface from './components/CounterInterface';


type ACTIONTYPE1 = 
  | {type: "increment", payload: number}
  | {type: "decrement", payload: number}

function reducer(state: {count: number }, action: ACTIONTYPE1) {
  switch (action.type) {
    case "increment":
      return {count: state.count + action.payload};
    case "decrement":
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}

function App() {

  const [countx, setCountx] = useState <number | null>(null);

  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ countx }</h1>
        <button onClick={() => setCountx((countx || 0) + 1)}>click here</button>
        <CounterRegularProp number="jamecho!"/>
        <CounterType number="tiche!"/>
        <CounterInterface number="Jara!"/>
        <hr />
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
