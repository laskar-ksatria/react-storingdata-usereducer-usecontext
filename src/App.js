import React from 'react';
import './App.css';
import { initialState, reducer } from './Reducer';
import Main from './pages/Main';

export const stateContext = React.createContext();

const App = () => {

  const [state, dispatchState] = React.useReducer(reducer,initialState);

  return (
    <div className="App">
      <stateContext.Provider value={{state: state, dispatchState: dispatchState}}>
        <Main />
      </stateContext.Provider>
    </div>
  )
};

export default App;