import { useMyContext } from './MyContext2';

export function ComponentGrandchild2() {
  const count = useMyContext();

  return (
    <div>
      <p>Grandchild2</p>
      <p>{count?.time}</p>
    </div>
  );
}
