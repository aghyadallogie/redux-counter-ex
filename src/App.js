import React from 'react';
import Xcounter from './components/Xcounter';
import Ycounter from './components/Ycounter';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Xcounter></Xcounter>
      <Ycounter></Ycounter>
    </div>
  );
}
