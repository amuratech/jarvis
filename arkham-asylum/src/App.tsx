import * as React from 'react';
import './App.css';
import Home from './components/Home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://cdn2.iconfinder.com/data/icons/heroes/128/superhero_batman_hero_comic-512.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Arkham Asylam</h1>
        </header>
        <Home name='sachin'/>
      </div>
    );
  }
}

export default App;
