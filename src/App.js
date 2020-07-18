import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { initialState, reducer } from './components/reducer'

export const stateContext = React.createContext(initialState);

function App() {

  const [{ users, posts, message }, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="App">
      <stateContext.Provider value={{message, users, posts, dispatch}}>
        <Dashboard />
      </stateContext.Provider>
    </div>
  )
};

export default App;