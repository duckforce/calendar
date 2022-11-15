import React from 'react';

import TimeInterval from './components/time-interval';
import BasicDatePicker from './pickers/basic';
import RangeDatePicker from './pickers/range';
import type { TBasicPicker, TRangePicker } from './props';

export type TCalendar = TBasicPicker | TRangePicker;

const Calendar = ({ type = 'basic', ...props }: TCalendar) => {
  switch (type) {
    case 'basic': {
      const { children, ...basicProps } = props as TBasicPicker;
      return <BasicDatePicker {...basicProps}>{children}</BasicDatePicker>;
    }
    case 'range': {
      return <RangeDatePicker {...(props as TRangePicker)} />;
    }
  }
};

type CalendarWithComponentsType = typeof Calendar & {
  TimeInterval: typeof TimeInterval;
};
(Calendar as CalendarWithComponentsType).TimeInterval = TimeInterval;

export default Calendar as CalendarWithComponentsType;
