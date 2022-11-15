import React, { memo } from 'react';

import cn from 'classnames';

import s from './months-years-panel.module.less';

type TMonthYearsPanel = {
  values: string[];
  selected: string;
  disabled?: string[];
  onSelect: (value: number) => void;
  today?: string;
};

const MonthsYearsPanel = memo(
  ({ values, selected, disabled, onSelect, today }: TMonthYearsPanel) => (
    <div className={cn(s.monthsYearsContainer)}>
      {values.map((value, index) => (
        <div
          key={value + index}
          className={cn(s.monthsYearsCell, {
            [s.disabled]: disabled?.includes(value),
            [s.selected]: selected === value,
            [s.today]: today === value,
          })}
          onClick={() => !disabled?.includes(value) && onSelect(index)}
        >
          {value}
        </div>
      ))}
    </div>
  ),
);

export default MonthsYearsPanel;
