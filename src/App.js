
import React, {useState} from 'react';

// creating a custom hook - create to function to contain custom hook

function useFormInputs(initialValue) {
  // using generic variables
  const [value,setValue] = useState(''); 
  // create a function to handle changes 
  function handleChange(e) {
    setValue(e.target.value);
  }
  // return value as default and call handleChange on any operation and return new value
  return {
    value,
    onChange: handleChange,
  }
}

function App() {
//  using custom hook using function
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
