import { useMemo } from 'react';

import { getLastDayOfMonth, getMonday, getSunday, parseToDateTimeZone } from './helpers';

export const useMonthDays = (selected: Date, timeZone?: string): Date[] =>
  useMemo(() => {
    let startDay = parseToDateTimeZone(selected, timeZone);
    startDay.setDate(1);
    startDay.setUTCHours(0);
    startDay.setUTCMinutes(0);
    startDay.setUTCSeconds(0);
    startDay.setUTCMilliseconds(0);
    startDay = getMonday(startDay);
    const lastDayMonth = getLastDayOfMonth(selected);
    const endDay = getSunday(lastDayMonth);
    const days: Date[] = [];
    while (true) {
      if (startDay <= endDay) {
        days.push(new Date(startDay));
        startDay.setDate(startDay.getDate() + 1);
      } else {
        break;
      }
    }
    return days;
  }, [selected.getDate(), selected.getMonth(), selected.getFullYear()]);
