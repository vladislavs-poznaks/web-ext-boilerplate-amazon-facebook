import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/styles/tailwind.css';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <div className="flex justify-between">
        <div>one</div>
        <div>one</div>
        <div>one</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-red-500">
          EEEdit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
