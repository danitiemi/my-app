import React, { Component } from 'react'
import './styles/App.scss'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import NotesBoard from './components/NotesBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <NavBar />
          <Header />
          <NotesBoard />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
