import { useMyContext3 } from './MyContext3';

export function ComponentGrandchild3() {
  const count = useMyContext3();

  return (
    <>
      <div>
        <p>Grandchild3</p>
        <p>{count?.count}</p>
        <button onClick={() => count?.setCount(count?.count + 1)}>button</button>
      </div>
    </>
  );
}
