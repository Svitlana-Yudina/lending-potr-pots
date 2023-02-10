import React from 'react';
import './App.scss';
import { Features } from './components/Features';
import { ForWhom } from './components/ForWhom';
import { Header } from './components/Header';

export const App:React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <ForWhom />
        <Features />
      </div>
    </div>
  );
};
