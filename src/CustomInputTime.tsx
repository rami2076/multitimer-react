import './style/input-time.css';

import { useEffect, useState } from 'react';

import TimeBox from './TimeBox';

export interface CustomInputTimeInterface {
  setTime(time: string): void;
}

function CustomInputTime(props: CustomInputTimeInterface) {
  const defaultValue = '0';
  const [hours, setHours] = useState(defaultValue);
  const [minutes, setMinutes] = useState(defaultValue);
  const [seconds, setSeconds] = useState(defaultValue);
  useEffect(() => {
    const time = `${hours}:${minutes}:${seconds}`;
    props.setTime(time);
  }, [hours, minutes, seconds]);

  return (
    <>
      <div>
        <div className={'time-wrapper'}>
          <div className={'time-input'}>
            <TimeBox
              name={'hours'}
              defaultValue={'0'}
              min={0}
              max={10}
              setValueState={(val: string) => setHours(val)}
            ></TimeBox>
            <span>:</span>
            <TimeBox
              name={'minutes'}
              defaultValue={'0'}
              min={0}
              max={59}
              setValueState={(val: string) => setMinutes(val)}
            ></TimeBox>
            <span>:</span>
            <TimeBox
              name={'seconds'}
              defaultValue={'0'}
              min={0}
              max={59}
              setValueState={(val: string) => setSeconds(val)}
            ></TimeBox>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomInputTime;
