export interface TimeBoxProps {
  name: string;
  defaultValue: string;
  max: number;
  min: number;
}

function TimeBox(prop: TimeBoxProps) {
  const labelClass = `label-${prop.name}`;

  return (
    <>
      <label htmlFor={prop.name}>
        <span className={`label ${labelClass}`}>{prop.name}</span>
        <input
          name={prop.name}
          max={prop.max}
          min={prop.min}
          type="number"
          defaultValue={prop.defaultValue}
        ></input>
      </label>
    </>
  );
}

export default TimeBox;
