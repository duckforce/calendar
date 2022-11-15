import React, { Fragment, useMemo, useState } from 'react';

import cn from 'classnames';

import Calendar from '../../components/calendar';
import { isSameDate, parseToDateTimeZone, mergeFilters } from '../../helpers';
import type { TBasicPicker } from '../../props';
import s from './basic.module.less';

type Props = TBasicPicker;

const BasicPicker = ({
  selected,
  timeZone,
  onChange,
  filter,
  clearable,
  children,
  minDate,
}: Props) => {
  const [calendar, setCalendar] = useState(new Date());

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

  // Здесь базовое состояние
  const value = useMemo(() => {
    if (selected) {
      const converted = parseToDateTimeZone(selected, timeZone);
      setCalendar(new Date(converted));
      return converted;
    }
    return undefined;
  }, [selected, timeZone]);
  // Здесь фильтр
  const filterState = useMemo(
    () =>
      mergeFilters(filter, minDateFilter)?.map<[Date, Date]>(interval => [
        parseToDateTimeZone(interval[0], timeZone),
        parseToDateTimeZone(interval[1], timeZone),
      ]),
    [filter, minDateFilter, timeZone],
  );
  const handleSelected = (date: Date) => {
    let returnValue: Date | undefined;
    if (value && isSameDate(value, date)) {
      if (!clearable) {
        return '';
      }
      returnValue = undefined;
    } else {
      returnValue = date;
    }
    if (onChange) {
      onChange(returnValue?.toISOString() ?? '');
    }
  };
  return (
    <div className={cn(s.container)}>
      <Calendar
        calendarDate={calendar}
        className={children ? s.calendarChildrenBottom : s.calendarNoChildrenBottom}
        filter={filterState}
        minMonth={minMonth}
        onCalendarChange={setCalendar}
        onSelect={handleSelected}
        selected={value}
      />
      {children && (
        <Fragment>
          <div className={cn(s.divider)} />
          {children}
        </Fragment>
      )}
    </div>
  );
};

export default BasicPicker;
