import { useState } from 'react';

import CustomInputTime from './CustomInputTime';
import InputTime from './InputTime';
import { Timer } from './Timer';

function App() {
  const [time, setTime] = useState('');
  const [text, setText] = useState('');

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <InputTime />
      <CustomInputTime setTime={(val: string) => setTime(val)} />
      <button onClick={() => (text ? setText(text + '\n' + time) : setText(time))}>
        button
      </button>
      <textarea onChange={(event) => setText(event.target.value)} value={text}></textarea>
      <Timer />
    </>
  );
}

export default App;
