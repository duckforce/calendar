import React, { Fragment, useCallback, useState } from 'react';

import cn from 'classnames';

import {
  changeDate,
  isBackBtnDisabled,
  isBetweenDates,
  isForwardBtnDisabled,
  isInRange,
  isSameDate,
} from '../../helpers';
import { useMonthDays } from '../../hooks';
import { months, WEEKDAYS } from '../../locale';
import Cell from '../cell';
import DayLabel from '../day-label';
import { MonthsPanel, YearsPanel } from '../months-years-panel';
import Slider from '../slider';
import s from './calendar.module.less';

interface ICalendar {
  selected?: Date | Date[];
  hovered?: number | null;
  onHoveredChange?: (value: number | null) => void;
  onSelect: (value: Date) => void;
  minMonth?: Date;
  maxMonth?: Date;
  calendarDate: Date;
  onCalendarChange: (value: Date) => void;
  filter?: [Date, Date][];
  className?: string;
}

const Calendar = ({
  selected,
  hovered,
  onHoveredChange,
  onSelect,
  minMonth,
  maxMonth,
  calendarDate,
  onCalendarChange,
  filter,
  className,
}: ICalendar) => {
  const [showMonthsPanel, setShowMonthPanel] = useState(false);
  const [showYearsPanel, setShowYearsPanel] = useState(false);
  const days = useMonthDays(calendarDate);
  const handleMouseEnter = useCallback(
    (date: Date) => {
      if (Array.isArray(selected) && !selected.length) {
        return;
      }
      onHoveredChange?.(date.getTime());
    },
    [selected, onHoveredChange],
  );
  const handleMonthChange = useCallback(
    (date: Date) => {
      onCalendarChange(date);
      setShowMonthPanel(false);
    },
    [onCalendarChange, setShowMonthPanel],
  );
  const handleYearChange = useCallback(
    (date: Date) => {
      onCalendarChange(date);
      setShowYearsPanel(false);
      setShowMonthPanel(true);
    },
    [onCalendarChange, setShowYearsPanel, setShowMonthPanel],
  );
  const backDisabled = minMonth ? isBackBtnDisabled(calendarDate, minMonth) : false;
  const forwardDisabled = maxMonth ? isForwardBtnDisabled(calendarDate, maxMonth) : false;
  const handleBackClick = useCallback(() => {
    if (!backDisabled) {
      const newDate = changeDate(calendarDate, showMonthsPanel, showYearsPanel, true);
      onCalendarChange(newDate);
    }
  }, [backDisabled, onCalendarChange, calendarDate, showMonthsPanel, showYearsPanel]);
  const handleForwardClick = useCallback(() => {
    if (!forwardDisabled) {
      const newDate = changeDate(calendarDate, showMonthsPanel, showYearsPanel);
      onCalendarChange(newDate);
    }
  }, [forwardDisabled, onCalendarChange, calendarDate, showMonthsPanel, showYearsPanel]);
  const handleMonthClick = () => {
    setShowYearsPanel(false);
    setShowMonthPanel(true);
  };
  const handleYearClick = () => {
    setShowMonthPanel(false);
    setShowYearsPanel(true);
  };
  return (
    <div className={cn(s.calendar, className)}>
      <Slider
        backDisabled={backDisabled}
        forwardDisabled={forwardDisabled}
        onBackClick={handleBackClick}
        onForwardClick={handleForwardClick}
      >
        {!showMonthsPanel && (
          <a className={cn(s.headerLabel)} onClick={handleMonthClick}>
            {months.get(calendarDate.getMonth())}
          </a>
        )}
        &nbsp;
        {!showYearsPanel && (
          <a className={cn(s.headerLabel)} onClick={handleYearClick}>
            {calendarDate.getFullYear()}
          </a>
        )}
      </Slider>
      {showMonthsPanel && (
        <MonthsPanel
          filter={filter}
          max={maxMonth}
          min={minMonth}
          onSelect={handleMonthChange}
          selected={calendarDate}
        />
      )}
      {showYearsPanel && (
        <YearsPanel
          filter={filter}
          max={maxMonth}
          min={minMonth}
          onSelect={handleYearChange}
          selected={calendarDate}
        />
      )}
      {!showMonthsPanel && !showYearsPanel && (
        <Fragment>
          <div className={cn(s.daylabels)}>
            {WEEKDAYS.map(([short, full], index) => (
              <DayLabel key={short + index} title={full}>
                {short}
              </DayLabel>
            ))}
          </div>
          <div className={cn(s.days)}>
            {days.map(day => {
              if (day.getMonth() !== calendarDate.getMonth()) {
                return <div key={day.toString()} />;
              }
              let isSelected = false;
              if (Array.isArray(selected)) {
                isSelected = selected.some(date => isSameDate(date, day));
              } else if (selected) {
                isSelected = isSameDate(day, selected);
              }
              const disabled = filter
                ? filter.some(interval => isBetweenDates(day, interval))
                : false;
              return (
                <Cell
                  key={day.toString()}
                  date={day}
                  disabled={disabled}
                  inRange={Array.isArray(selected) && isInRange(day.getTime(), selected, hovered)}
                  onClick={onSelect}
                  onMouseEnter={handleMouseEnter}
                  selected={isSelected}
                />
              );
            })}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Calendar;
