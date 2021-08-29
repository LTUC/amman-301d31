import React from 'react';
import Button from './components/Button';
import Board from './components/Board';

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Hello from the first React App</h1>
        <p>My name is Roaa</p>
        <Button/>
        <Board />
      </div>
    )
  }
}

export default App;