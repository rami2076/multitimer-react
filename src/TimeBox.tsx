export interface TimeBoxProps {
  name: string;
  defaultValue: string;
  max: number;
  min: number;
}

function TimeBox(prop: TimeBoxProps) {
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
        ></input>
      </label>
    </>
  );
}

export default TimeBox;
