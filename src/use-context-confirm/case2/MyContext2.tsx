import { createContext, JSX, useContext, useEffect, useState } from 'react';

export interface Context2 {
  time: number;

  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext2 = createContext<Context2 | null>(null);

export function useMyContext2() {
  return useContext(MyContext2);
}

type Props = {
  children: JSX.Element;
};

export function CountProvider2({ children }: Props) {
  const [time, setTime] = useState(5);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);
  const value = {
    time,
    setTime,
  } as Context2;

  return (
    <>
      <p>{typeof children}</p>
      <MyContext2.Provider value={value}>{children}</MyContext2.Provider>
    </>
  );
}
