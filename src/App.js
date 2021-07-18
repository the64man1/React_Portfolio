//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './components/header';
// import Navigation from './components/navigation';
// import AboutMe from './components/aboutme';
import Container from './components/container';

import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
