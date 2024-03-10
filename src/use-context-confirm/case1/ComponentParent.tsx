import { ComponentChild } from './ComponentChild';

export function ComponentParent() {
  return (
    <div>
      <p>Parent</p>
      <ComponentChild />
    </div>
  );
}
