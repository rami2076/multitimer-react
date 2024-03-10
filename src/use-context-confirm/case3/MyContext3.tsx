import { createContext, JSX, useContext, useState } from 'react';

export interface Context3 {
  count: number;

  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext3 = createContext<Context3 | null>(null);

export function useMyContext3() {
  return useContext(MyContext3);
}

type Props = {
  children: JSX.Element;
};

export function CountProvider3({ children }: Props) {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  } as Context3;

  return (
    <>
      <p>{typeof children}</p>
      <MyContext3.Provider value={value}>{children}</MyContext3.Provider>
    </>
  );
}
