import React, { Component } from 'react';
import './App.css';
import ChatBotMain from './Containers/ChatBotMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatBotMain/>
      </div>
    );
  }
}

export default App;
