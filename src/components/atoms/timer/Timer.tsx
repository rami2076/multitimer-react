import { useEffect, useState } from 'react';

import beep from '../../../assets/beep.mp3';
import { ComponentParent } from '../../../use-context-confirm/case1/ComponentParent';
import { MyContext } from '../../../use-context-confirm/case1/MyContext';
import { ComponentParent2 } from '../../../use-context-confirm/case2/ComponentParent2';
import { CountProvider2 } from '../../../use-context-confirm/case2/MyContext2';
import { ComponentParent3 } from '../../../use-context-confirm/case3/ComponentParent3';
import { CountProvider3 } from '../../../use-context-confirm/case3/MyContext3';
import Button from '../button/Button';

export function Timer() {
  const [time, setTime] = useState(5);
  const [isBeep, setIsBeep] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // const [interval, setInterval] = useState(1000);

  useEffect(() => {
    let id: NodeJS.Timeout | null;
    if (time > 0 && isBeep) {
      id = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      setIntervalId(id);
    } else if (time === 0 && isBeep) {
      setIsBeep(false);
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      const music = new Audio(beep);
      music.currentTime = 0;
      music.play();
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [time]);

  return (
    <>
      <p>Time: {time}</p>

      <Button
        onClick={() => {
          console.log();
        }}
        disabled={true}
        text="Start"
      />
      <Button
        onClick={() => {
          console.log();
        }}
        disabled={false}
        text="Reset"
      />
      <Button
        onClick={() => {
          console.log();
        }}
        disabled={false}
        text="Resume"
      />
      <MyContext.Provider value={1}>
        <ComponentParent />
      </MyContext.Provider>

      <MyContext.Provider value={time}>
        <ComponentParent />
      </MyContext.Provider>

      <CountProvider2>
        <ComponentParent2 />
      </CountProvider2>

      <CountProvider2>
        <ComponentParent2 />
      </CountProvider2>

      <CountProvider3>
        <ComponentParent3 />
      </CountProvider3>

      <CountProvider3>
        <ComponentParent3 />
      </CountProvider3>
    </>
  );
}
