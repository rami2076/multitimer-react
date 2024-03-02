import { useState } from 'react';

import CustomInputTime from './CustomInputTime';
import InputTime from './InputTime';

function App() {
  const [time, setTime] = useState('');

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <InputTime />
      <CustomInputTime setTime={(val: string) => setTime(val)} />
      <button onClick={() => console.log(time)}>button</button>
      <textarea></textarea>
    </>
  );
}

export default App;
