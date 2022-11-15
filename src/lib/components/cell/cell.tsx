import React, { memo } from 'react';

import cn from 'classnames';

import { isToday } from '../../helpers';
import s from './cell.module.less';

interface ICalendarCell {
  date: Date;
  inRange: boolean;
  selected: boolean;
  disabled: boolean;
  onClick: (value: Date) => void;
  onMouseEnter: (value: Date) => void;
}

const Cell = memo(({ date, inRange, selected, disabled, onClick, onMouseEnter }: ICalendarCell) => (
  <button
    className={cn(s.cell, {
      [s.selected]: selected,
      [s.holiday]: date.getDay() === 6 || date.getDay() === 0,
      [s.today]: isToday(date),
      [s.inrange]: inRange,
      [s.disabled]: disabled,
    })}
    onClick={() => !disabled && onClick(date)}
    onMouseEnter={() => onMouseEnter(date)}
    type="button"
  >
    {date.getDate()}
  </button>
));

export default Cell;
