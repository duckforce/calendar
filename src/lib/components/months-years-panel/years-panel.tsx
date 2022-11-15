import React, { memo, useCallback, useMemo } from 'react';

import { getYearsByIntervals } from '../../helpers';
import MonthsYearsPanel from './months-years-panel';

export type TYearsPanel = {
  selected: Date;
  onSelect: (value: Date) => void;
  max?: Date;
  min?: Date;
  filter?: [Date, Date][];
};

const YearsPanel = memo(({ selected, onSelect, min, max, filter }: TYearsPanel) => {
  const filteredYears = useMemo(() => (filter ? getYearsByIntervals(filter) : []), [filter]);
  const years = useMemo<string[]>(() => {
    const date = selected || new Date();
    const year = date.getFullYear();
    const diff = parseInt(year.toString().slice(-1));
    let startYear = year - diff;
    const years: string[] = [];
    while (startYear < year - diff + 12) {
      years.push(startYear.toString());
      startYear++;
    }
    return years;
  }, [selected]);
  const disabled = useMemo(
    () =>
      years.reduce<string[]>((acc, value) => {
        const year = parseInt(value);
        if (
          filteredYears?.some(filtered => year === filtered.getFullYear()) ||
          (min && year < min.getFullYear()) ||
          (max && year > max.getFullYear())
        ) {
          acc.push(value);
        }
        return acc;
      }, []),
    [filteredYears, max, min, years],
  );
  const handleSelect = useCallback(
    (index: number) => {
      const date = new Date(selected ?? new Date());
      date.setFullYear(parseInt(years[index]));
      onSelect(date);
    },
    [onSelect, selected, years],
  );
  return (
    <MonthsYearsPanel
      disabled={disabled}
      onSelect={handleSelect}
      selected={selected ? selected.getFullYear().toString() : ''}
      today={new Date().getFullYear().toString()}
      values={years}
    />
  );
});
export default YearsPanel;
