import { useEffect, useState } from 'react';

export interface TimeBoxProps {
  name: string;
  defaultValue: string;
  max: number;
  min: number;

  setValueState(value: string): void;
}

function TimeBox(prop: TimeBoxProps) {
  const [value, setValue] = useState(prop.defaultValue);
  useEffect(() => {
    prop.setValueState(value);
  }, [value]);

  return (
    <>
      <label className={'time-box'} htmlFor={prop.name}>
        <span className={`label time-box`}>{prop.name}</span>
        <input
          className={'time-box'}
          name={prop.name}
          max={prop.max}
          min={prop.min}
          type="number"
          defaultValue={prop.defaultValue}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
      </label>
    </>
  );
}

export default TimeBox;
