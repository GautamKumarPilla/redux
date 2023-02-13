import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Countries from './components/Countries';

function App() {
  return (
     <Provider store={store}>
    <div className="betterview">
      <h1>This is Redux</h1>
      <Counter/>
      <Todolist/>
      <Countries/>
    </div>
    </Provider>
  );
}

export default App;
