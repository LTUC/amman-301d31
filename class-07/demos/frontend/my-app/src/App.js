import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name:'',
      url:''
    }
  }
  getPockData = async (event) => {
    event.preventDefault();
    const name = event.target.pockName.value;
    const url = `http://localhost:3010/getPock?name=${name}`;
    console.log(url);
    try
    {
      const result = await axios.get(url);
      console.log(result)
      this.setState({
        name: result.data.name,
        url: result.data.url
      })
    }
    catch
    {
      console.log('Error');
    }
  }
  
  render(){
    return(
      <>
      <h1>Front-end Side</h1>

      <form onSubmit={this.getPockData}>
        <input type='text' name='pockName' placeholder='Enter Pock Name' />
        <button type='submit'>Get Pock Data</button>
      </form>

      <p>{this.state.name}</p>
      <p>{this.state.url}</p>
      </>
    )
  }
}

export default App;