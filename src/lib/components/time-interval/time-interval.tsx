import type { ChangeEvent } from 'react';
import React from 'react';

import cn from 'classnames';

// import TextInput, { withLabel } from '../../../TextInput';
import s from './time-interval.module.less';

// const TextInputWithLabel = withLabel(TextInput);

type TDayLabel = {
  startValue?: string;
  onStartChange?: (value: string) => void;
  endValue?: string;
  onEndChange?: (value: string) => void;
  minStart?: string;
  maxStart?: string;
  minEnd?: string;
  maxEnd?: string;
};

const TimeInterval = ({
  startValue,
  onStartChange,
  endValue,
  onEndChange,
  minStart,
  maxStart,
  minEnd,
  maxEnd,
}: TDayLabel) => (
  <div className={cn(s.TimeInterval)}>
    <div className={cn(s.TimeCell)}>
      {/* <TextInputWithLabel
        defaultValue="00:00"
        fluid
        label="Начало"
        max={maxStart}
        min={minStart}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onStartChange && onStartChange(e.target.value)
        }
        required
        size="S"
        type="time"
        value={startValue}
      /> */}
    </div>
    <div className={cn(s.TimeCell)}>
      {/* <TextInputWithLabel
        defaultValue="23:59"
        fluid
        label="Завершение"
        max={maxEnd}
        min={minEnd}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onEndChange && onEndChange(e.target.value)}
        required
        size="S"
        type="time"
        value={endValue}
      /> */}
    </div>
  </div>
);

export default TimeInterval;
