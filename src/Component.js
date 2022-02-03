import React, {useState} from 'react';
 

 export default function ClassComponent() {
  const [value, setValue] = useState('text')



  return (
    <div className='App'>
      <h1>{value}</h1>
      <input 
      type="text"
       value={value}
      onChange={event => setValue(event.target.value)}
      />
      </div>
  );
}




