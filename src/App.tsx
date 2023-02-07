import React from 'react';
import './App.scss';
import { Header } from './Header';

export const App:React.FC = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
      </div>
    </div>
  );
};
