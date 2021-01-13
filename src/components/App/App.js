import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
