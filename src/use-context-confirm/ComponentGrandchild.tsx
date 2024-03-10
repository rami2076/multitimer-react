import { useContext } from 'react';
import { MyContext } from './MyContext';

export function ComponentGrandchild() {
  const count = useContext(MyContext);

  return (
    <div>
      <p>Grandchild</p>
      <p>{count}</p>
    </div>
  );
}
