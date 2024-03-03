import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(5);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  return <p>Time: {time}</p>;
}
