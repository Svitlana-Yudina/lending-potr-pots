import React from 'react';
import './App.scss';
import { ForWhom } from './components/ForWhom';
import { Header } from './components/Header';

export const App:React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <ForWhom />
      </div>
    </div>
  );
};
