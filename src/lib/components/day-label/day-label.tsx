import type { ReactNode } from 'react';
import React, { memo } from 'react';

import cn from 'classnames';

import s from './day-label.module.less';

type TDayLabel = {
  title?: string;
  children?: ReactNode;
};

const DayLabel = memo(({ title, children }: TDayLabel) => (
  <button className={cn(s.dayLabel)} title={title} type="button">
    {children}
  </button>
));

export default DayLabel;
