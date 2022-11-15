import React, { memo, useCallback, useMemo } from 'react';

import {
  getMonthsByIntervals,
  isLessMonthAndYear,
  isMoreMonthAndYear,
  isSameMonthAndYear,
} from '../../helpers';
import { months } from '../../locale';
import MonthsYearsPanel from './months-years-panel';

const monthLabels = Array.from(months.values());

export type TMonthPanel = {
  selected: Date;
  onSelect: (value: Date) => void;
  min?: Date;
  max?: Date;
  filter?: [Date, Date][];
};

const MonthsPanel = memo(({ selected, onSelect, min, max, filter }: TMonthPanel) => {
  const filteredMonths = useMemo(() => (filter ? getMonthsByIntervals(filter) : []), [filter]);
  const disabled = useMemo(() => {
    const date = new Date(selected || new Date());
    return Array.from(months).reduce<string[]>((acc, [key, value]) => {
      date.setMonth(key);
      if (
        filteredMonths?.some(value => isSameMonthAndYear(date, value)) ||
        (min && isLessMonthAndYear(date, min)) ||
        (max && isMoreMonthAndYear(date, max))
      ) {
        acc.push(value);
      }
      return acc;
    }, []);
  }, [selected, filteredMonths, min, max]);
  const handleSelect = useCallback(
    (index: number) => {
      const date = new Date(selected ?? new Date());
      date.setMonth(index);
      onSelect(date);
    },
    [onSelect, selected],
  );
  const today =
    new Date().getFullYear() === selected.getFullYear()
      ? monthLabels[new Date().getMonth()]
      : undefined;
  return (
    <MonthsYearsPanel
      disabled={disabled}
      onSelect={handleSelect}
      selected={selected ? months.get(selected.getMonth()) ?? '' : ''}
      today={today}
      values={monthLabels}
    />
  );
});

export default MonthsPanel;
