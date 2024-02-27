import './style/input-time.css';

import TimeBox from './TimeBox';

function CustomInputTime() {
  return (
    <>
      <div>
        <div className={'time-wrapper'}>
          <div className={'time-input'}>
            <TimeBox name={'hours'} defaultValue={'0'} min={0} max={10}></TimeBox>
            <span>:</span>
            <TimeBox name={'minutes'} defaultValue={'0'} min={0} max={59}></TimeBox>
            <span>:</span>
            <TimeBox name={'seconds'} defaultValue={'0'} min={0} max={59}></TimeBox>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomInputTime;
