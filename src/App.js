
import React, {useState} from 'react';

function App() {
  const emailState = useState('a@a.com');
  const email = emailState[0];
  const setEmail = emailState[1];

  const nameState = useState('Manoj');
  const name = nameState[0];
  const setName = nameState[1];

  function handleChange (e) {
    setEmail(e.target.value)
  }
  function handleChangeName (e) {
    setName(e.target.value)
  }

  return (
    <div className='App' style = {{ padding: 10}} >
      <input 
        value={email}
        onChange={handleChange} />
        <input 
        value={name}
        onChange={handleChangeName} />
        <p>Email:{email}</p>
        <p>Name:{name}</p> 
    </div>
  );
}

  

export default App;
