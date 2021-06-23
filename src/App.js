import React from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store";
import {Provider} from "react-redux";
import Publicar from "./components/Publicar";

function App() {
  return (
    <Provider store={store}>
      <Publicar></Publicar>
    </Provider>
    
  );
}

export default App;
