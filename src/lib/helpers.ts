export const isInRange = (
  date: number,
  selected: Date[],
  hoveredDate: number | null | undefined,
): boolean => {
  if (!selected.length) {
    return false;
  }
  const firstSelected = selected[0].getTime();
  if (selected.length === 2) {
    const secondSelected = selected[1].getTime();
    return firstSelected < date && secondSelected > date;
  } else {
    return Boolean(
      hoveredDate &&
        ((firstSelected < date && hoveredDate >= date) ||
          (date < firstSelected && date >= hoveredDate)),
    );
  }
};

export const isToday = (date: Date): boolean => {
  const now = new Date();
  return (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    now.getDate() === date.getDate()
  );
};

export const getMonday = (d: Date): Date => {
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

export const getSunday = (date: Date): Date => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff + 7));
};

export const getLastDayOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const isSameMonthAndYear = (date1: Date, date2: Date): boolean =>
  date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();

export const isSameDate = (date1: Date, date2: Date): boolean =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const isBetweenDates = (date: Date, interval: [Date, Date]) => {
  const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const startInterval = new Date(
    interval[0].getFullYear(),
    interval[0].getMonth(),
    interval[0].getDate(),
  );
  const endInterval = new Date(
    interval[1].getFullYear(),
    interval[1].getMonth(),
    interval[1].getDate(),
  );
  return selectedDate >= startInterval && selectedDate <= endInterval;
};

export const isIntersectDateIntervals = (interval1: [Date, Date], interval2: [Date, Date]) =>
  (interval1[0] > interval2[0] && interval1[0] < interval2[1]) ||
  (interval2[0] > interval1[0] && interval2[0] < interval1[1]);

export const isLessMonthAndYear = (date1: Date, date2: Date): boolean =>
  date1.getMonth() <= date2.getMonth() && date1.getFullYear() <= date2.getFullYear();

export const isMoreMonthAndYear = (date1: Date, date2: Date): boolean =>
  date1.getMonth() >= date2.getMonth() && date1.getFullYear() >= date2.getFullYear();

export const getCalendarsByDates = (date1: Date, date2?: Date): [Date, Date] => {
  const first = new Date(date1);
  const second = new Date(date2 ?? date1);
  if (isSameMonthAndYear(first, second)) {
    second.setMonth(second.getMonth() + 1);
  }
  return [first, second];
};

export const addAndSortDatesInterval = (date: Date, intervals: Date[]): Date[] => {
  const dateTime = date.getTime();
  let newDates = [...intervals];
  if (intervals.length) {
    if (intervals.length === 1) {
      const firstTime = intervals[0].getTime();
      if (firstTime < dateTime) {
        newDates.push(date);
      } else {
        newDates.unshift(date);
      }
    } else if (newDates.length === 2) {
      newDates = [date];
    }
  } else {
    newDates.push(date);
  }
  return newDates;
};

export const isBackBtnDisabled = (date: Date, min: Date) =>
  date.getFullYear() <= min.getFullYear() && date.getMonth() - 1 <= min.getMonth();

export const isForwardBtnDisabled = (date: Date, max: Date) =>
  date.getFullYear() >= max.getFullYear() && date.getMonth() + 1 >= max.getMonth();

export const changeDate = (
  calendarDate: Date,
  oneYear: boolean,
  tenYears: boolean,
  decrement?: boolean,
): Date => {
  let newDate: Date;
  if (oneYear) {
    newDate = new Date(
      calendarDate.setFullYear(calendarDate.getFullYear() + (decrement ? -1 : +1)),
    );
  } else if (tenYears) {
    newDate = new Date(
      calendarDate.setFullYear(calendarDate.getFullYear() + (decrement ? -10 : +10)),
    );
  } else {
    newDate = new Date(calendarDate.setMonth(calendarDate.getMonth() + (decrement ? -1 : +1)));
  }
  return newDate;
};

export const getMonthsByIntervals = (intervals: [Date, Date][]): Date[] =>
  intervals.reduce<Date[]>((acc, value) => {
    if (
      value[0].getMonth() === value[1].getMonth() &&
      value[0].getFullYear() === value[1].getFullYear()
    ) {
      return acc;
    }
    const startDate = new Date(value[0]);
    if (startDate.getDate() !== 1) {
      startDate.setMonth(startDate.getMonth() + 1);
    }
    const endDate = new Date(value[1]);
    const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
    if (endDate.getDate() === lastDayOfMonth.getDate()) {
      endDate.setMonth(endDate.getMonth() + 1);
    }
    while (!isSameMonthAndYear(startDate, endDate)) {
      acc.push(new Date(startDate));
      startDate.setMonth(startDate.getMonth() + 1);
    }
    return acc;
  }, []);

export const getYearsByIntervals = (intervals: [Date, Date][]): Date[] =>
  intervals.reduce<Date[]>((acc, value) => {
    if (value[0].getFullYear() === value[1].getFullYear()) {
      return acc;
    }
    const startDate = new Date(value[0]);
    if (startDate.getMonth() !== 1 && startDate.getDate() !== 1) {
      startDate.setFullYear(startDate.getFullYear() + 1);
    }
    const endDate = new Date(value[1]);
    const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
    if (endDate.getDate() === lastDayOfMonth.getDate() && endDate.getMonth() === 11) {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    while (startDate.getFullYear() !== endDate.getFullYear()) {
      acc.push(new Date(startDate));
      startDate.setFullYear(startDate.getFullYear() + 1);
    }
    return acc;
  }, []);

export const parseToDateTimeZone = (value: string | Date, timeZone?: string) =>
  new Date(
    new Date(value || Date.now()).toLocaleString('en-US', {
      timeZone,
    }),
  );

export const mergeFilters = (filter?: [string, string][], item?: [string, string]) => {
  if (filter && item) {
    return [...filter, item];
  } else if (item) {
    return [item];
  }
  return filter;
};
