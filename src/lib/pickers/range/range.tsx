import React, { useMemo, useState } from 'react';

import cn from 'classnames';

import Calendar from '../../components/calendar';
import {
  addAndSortDatesInterval,
  getCalendarsByDates,
  isIntersectDateIntervals,
  parseToDateTimeZone,
  mergeFilters,
} from '../../helpers';
import type { TRangePicker } from '../../props';
import s from './range.module.less';

type Props = TRangePicker;

const RangeDatePicker = ({ selected, timeZone, onChange, filter, minDate }: Props) => {
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const [firstCalendar, setFirstCalendar] = useState(new Date());
  const [secondCalendar, setSecondCalendar] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 1)),
  );

  // minMonth и minDateFilter нужны для минимальной даты (minDate)
  const minMonth = useMemo(() => {
    if (!minDate) {
      return undefined;
    }
    const minMonth = new Date(minDate);
    minMonth.setMonth(minMonth.getMonth() - 1);
    return minMonth;
  }, [minDate]);
  const minDateFilter = useMemo(
    () =>
      minMonth ? ([minMonth.toISOString(), minDate?.toISOString()] as [string, string]) : undefined,
    [minMonth, minDate],
  );

  // Здесь значение
  const values = useMemo(() => {
    if (!Array.isArray(selected) || !selected.length) {
      return [];
    }
    const parsedValues = [parseToDateTimeZone(selected[0], timeZone)];
    if (selected.length === 2) {
      parsedValues.push(parseToDateTimeZone(selected[1], timeZone));
    }
    const [first, second] = getCalendarsByDates(parsedValues[0], parsedValues[1]);
    setFirstCalendar(first);
    setSecondCalendar(second);
    return parsedValues;
  }, [selected, timeZone]);
  // Здесь фильтр
  const filterState = useMemo(
    () =>
      mergeFilters(filter, minDateFilter)?.map<[Date, Date]>(interval => [
        parseToDateTimeZone(interval[0], timeZone),
        parseToDateTimeZone(interval[1], timeZone),
      ]),
    [filter, timeZone, minDateFilter],
  );

  // Хэндлер выбора
  const handleSelected = (value: Date) => {
    const newDates = addAndSortDatesInterval(value, values);
    if (
      newDates.length === 2 &&
      filter &&
      filter.some(interval => {
        const parsedInterval: [Date, Date] = [
          parseToDateTimeZone(interval[0], timeZone),
          parseToDateTimeZone(interval[1], timeZone),
        ];
        return isIntersectDateIntervals(parsedInterval, newDates as [Date, Date]);
      })
    ) {
      return;
    }
    if (newDates.length === 2) {
      const [first, second] = getCalendarsByDates(newDates[0], newDates[1]);
      setFirstCalendar(first);
      setSecondCalendar(second);
    }
    if (onChange) {
      const returnValues = [newDates[0]?.toISOString()];
      if (newDates.length === 2) {
        returnValues.push(newDates[1]?.toISOString());
      }
      onChange(returnValues);
    }
  };
  return (
    <div className={cn(s.container)} onMouseLeave={() => setHoveredDate(null)}>
      <Calendar
        calendarDate={firstCalendar}
        className={s.calendarCustom}
        filter={filterState}
        hovered={hoveredDate}
        maxMonth={secondCalendar}
        minMonth={minMonth}
        onCalendarChange={setFirstCalendar}
        onHoveredChange={setHoveredDate}
        onSelect={handleSelected}
        selected={values}
      />
      <div className={cn(s.divider)} />
      <Calendar
        calendarDate={secondCalendar}
        className={s.calendarCustom}
        filter={filterState}
        hovered={hoveredDate}
        minMonth={firstCalendar}
        onCalendarChange={setSecondCalendar}
        onHoveredChange={setHoveredDate}
        onSelect={handleSelected}
        selected={values}
      />
    </div>
  );
};

export default RangeDatePicker;
