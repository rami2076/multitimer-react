import { useState } from 'react';

import HMSTimeInput from './components/atoms/timer/input/HMSTimeInput';
import DefaultTimeInput from './components/atoms/timer/input/DefaultTimeInput';
import { Timer } from './components/atoms/timer/Timer';

function App() {
  const [time, setTime] = useState('');
  const [text, setText] = useState('');

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <DefaultTimeInput />
      <HMSTimeInput setTime={(val: string) => setTime(val)} />
      <button onClick={() => (text ? setText(text + '\n' + time) : setText(time))}>
        button
      </button>
      <textarea onChange={(event) => setText(event.target.value)} value={text}></textarea>
      <Timer />
    </>
  );
}

export default App;
