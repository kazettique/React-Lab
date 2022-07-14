import dayjs, { Dayjs } from 'dayjs';
import { useState, useRef } from 'react';
import duration from 'dayjs/plugin/duration';
// import { UseConsoleLog as useConsoleLog } from '../hooks';

// dayjs extension
dayjs.extend(duration);

type DiffTime = {
  yearDiff: number;
  monthDiff: number;
  dayDiff: number;
  hourDiff: number;
  minuteDiff: number;
  secondDiff: number;
  millisecondDiff: number;
};

function UseTimer(endDateTime: Dayjs, onFinish?: () => void, updateIntervalSecond = 1): DiffTime {
  const now: Dayjs = dayjs();

  if (updateIntervalSecond <= 0) {
    // useConsoleLog('UseTimer', 'error', 'updateIntervalSecond should be positive number.');
  }

  if (now.isAfter(endDateTime)) {
    // useConsoleLog('UseTimer', 'error', 'endDateTime should be future time.');
  }

  const defaultRemainTime: DiffTime = {
    yearDiff: 0,
    monthDiff: 0,
    dayDiff: 0,
    hourDiff: 0,
    minuteDiff: 0,
    secondDiff: 0,
    millisecondDiff: 0,
  };

  const [remainTime, setRemainTime] = useState<DiffTime>(defaultRemainTime);
  const intervalIdRef = useRef<null | NodeJS.Timer>(null);
  const getNotNegativeNumber = (num: number) => {
    return num < 0 ? 0 : num;
  };

  const calculateDateTimeDiff = () => {
    const diff = endDateTime.diff(dayjs());
    const diffDuration = dayjs.duration(diff);

    const yearDiff = getNotNegativeNumber(diffDuration.years());
    const monthDiff = getNotNegativeNumber(diffDuration.months());
    const dayDiff = getNotNegativeNumber(diffDuration.days());
    const hourDiff = getNotNegativeNumber(diffDuration.hours());
    const minuteDiff = getNotNegativeNumber(diffDuration.minutes());
    const secondDiff = getNotNegativeNumber(diffDuration.seconds());
    const millisecondDiff = getNotNegativeNumber(diffDuration.milliseconds());

    setRemainTime({
      yearDiff,
      monthDiff,
      dayDiff,
      hourDiff,
      minuteDiff,
      secondDiff,
      millisecondDiff,
    });
  };

  if (!intervalIdRef.current && updateIntervalSecond >= 0) {
    intervalIdRef.current = setInterval(calculateDateTimeDiff, 1000 * updateIntervalSecond);
  }

  if (now.isAfter(endDateTime)) {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
    intervalIdRef.current = null;

    if (onFinish) {
      onFinish();
    }
  }

  return remainTime;
}

export default UseTimer;
