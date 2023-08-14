import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

constructor (props) {
  super (props);
  this.state = {email: ''}
}

handleChanges = (e) => {
  this.setState({
    email: e.target.value
  })
}
render(){
return (
  <div className="App">
    <input value = {this.state.email}
    onChange = {this.handleChanges} />
   <p>Email: {this.state.email}</p>
  </div>
);
}
}

  

export default App;
