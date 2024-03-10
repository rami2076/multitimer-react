import { JSX } from 'react';

import { ComponentGrandchild3 } from './ComponentGrandchild3';

export function ComponentChild3(): JSX.Element {
  return (
    <>
      <div>
        <p>Child3</p>
        <ComponentGrandchild3 />
      </div>
    </>
  );
}
