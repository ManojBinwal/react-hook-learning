
import React, {useState} from 'react';

function useFormInputs(initialValue) {
  const [value,setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  }
}

function App() {
  // const emailState = useState('a@a.com');
  // const email = emailState[0];
  // const setEmail = emailState[1];

  // const nameState = useState('Manoj');
  // const name = nameState[0];
  // const setName = nameState[1];

 

  const email = useFormInputs('');
  const name = useFormInputs('');


  return (
    <div className='App' style = {{ padding: 10}} >
   {/* using spread operator to shorten code (value = value onchange = onchange) */}
      <input 
        type='text' {...email} /> 
        <input type='text'{...name} />
        <p>Email:{email.value}</p>
        <p>Name:{name.value}</p> 
    </div>
  );
}

  

export default App;
