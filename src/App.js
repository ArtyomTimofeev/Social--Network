import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="global">
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <Content />
      </div>
    </div>
  );
};

export default App;
