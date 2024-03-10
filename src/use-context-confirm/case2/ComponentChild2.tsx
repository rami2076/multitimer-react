import { JSX } from 'react';

import { ComponentGrandchild2 } from './ComponentGrandchild2';

export function ComponentChild2(): JSX.Element {
  return (
    <>
      <div>
        <p>Child2</p>
        <ComponentGrandchild2 />
      </div>
    </>
  );
}
