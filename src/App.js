import React, { Component } from 'react';
import './assets/Main.css';
import Header from './views/Header';
import Main from './Main';
import Footer from './views/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
