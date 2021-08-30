import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="global">
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
