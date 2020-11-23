import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import KokoroFilter from './pages/kokoro-filter/KokoroFilter';

const App:React.FC = () => (
  <div className="App">

    <Header />
    <KokoroFilter />
  </div>
);

export default App;
