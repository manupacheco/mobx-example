import React, { Component } from 'react';
import Counter from './components/Counter';
import counter from './store/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={counter} /> 
      </div>
    );
  }
}

export default App;
