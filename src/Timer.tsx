import { useEffect, useState } from 'react';

import { ComponentParent } from './use-context-confirm/case1/ComponentParent';
import { MyContext } from './use-context-confirm/case1/MyContext';
import { ComponentParent2 } from './use-context-confirm/case2/ComponentParent2';
import { CountProvider2 } from './use-context-confirm/case2/MyContext2';

export function Timer() {
  const [time, setTime] = useState(5);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      <p>Time: {time}</p>

      <MyContext.Provider value={1}>
        <ComponentParent />
      </MyContext.Provider>

      <MyContext.Provider value={time}>
        <ComponentParent />
      </MyContext.Provider>

      <CountProvider2>
        <ComponentParent2 />
      </CountProvider2>

      <CountProvider>
        <ComponentParent2 />
      </CountProvider>
    </>
  );
}
