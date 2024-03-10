import { ComponentGrandchild } from './ComponentGrandchild';

export function ComponentChild() {
  return (
    <>
      <div>
        <p>Child</p>
        <ComponentGrandchild />
      </div>
    </>
  );
}
