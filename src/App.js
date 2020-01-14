import React from 'react';
import './App.css';
import MainComponent from './components/main/MainComponent';
import AboutComponent from './components/about/AboutComponent';
import HeaderComponent from './components/header/HeaderComponent';
import ContactComponent from './components/contact/ContactComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainComponent />
      <AboutComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
