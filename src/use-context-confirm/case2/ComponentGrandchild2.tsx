import { useMyContext2 } from './MyContext2';

export function ComponentGrandchild2() {
  const count = useMyContext2();

  return (
    <div>
      <p>Grandchild2</p>
      <p>{count?.time}</p>
    </div>
  );
}
