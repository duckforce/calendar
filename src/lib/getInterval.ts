export enum DateHistogramFieldSettings_Unit {
  UNSPECIFIED = 0,
  MILLISECOND = 1,
  SECOND = 2,
  MINUTE = 3,
  HOUR = 4,
  DAY = 5,
  WEEK = 6,
  MONTH = 7,
  YEAR = 8,
}

type BorderInterval = {
  min: number;
  max: number;
};

const Borders: BorderInterval = {
  min: 40,
  max: 150,
};

const availableIntervals: readonly number[] = [1, 2, 5, 10, 15, 30];
const hourIntervals: readonly number[] = [1, 2, 6];

function logBase(x: number, base: number): number {
  return Math.log(x) / Math.log(base);
}

function getPower(i: number): number {
  return Math.ceil(logBase(i / Borders.max, Borders.max / Borders.min));
}

function nearest(list: readonly number[], target: number): number {
  let near = list[0];
  for (const n of list) {
    if (Math.abs(n - target) < Math.abs(near - target)) {
      near = n;
    }
  }
  return near;
}

type CropPostfix = 'M' | 'd' | 'h' | 'm' | 's';

function cropInterval(deltaSeconds: number): { postfix: CropPostfix; number: number } {
  if (deltaSeconds > 60 * 60 * 24 * 30) {
    return { postfix: 'M', number: deltaSeconds / (60 * 60 * 24 * 30) };
  }
  if (deltaSeconds > 60 * 60 * 24) {
    return { postfix: 'd', number: deltaSeconds / (60 * 60 * 24) };
  }
  if (deltaSeconds > 60 * 60) {
    return { postfix: 'h', number: deltaSeconds / (60 * 60) };
  }
  if (deltaSeconds > 60) {
    return { postfix: 'm', number: deltaSeconds / 60 };
  }
  return { postfix: 's', number: deltaSeconds };
}

export function GetInterval(
  fromTime: Date,
  toTime: Date,
): { unit: DateHistogramFieldSettings_Unit; value: number } {
  const deltaSeconds = Math.abs((toTime.getTime() - fromTime.getTime()) / 1000);

  let interval = Math.pow(Borders.max / Borders.min, getPower(deltaSeconds));
  const { postfix, number } = cropInterval(interval);

  let unit: DateHistogramFieldSettings_Unit;
  let value: number;

  if (postfix === 'M') {
    unit = DateHistogramFieldSettings_Unit.MONTH;
    value = 1; // Elastic допускает только 1M
  } else if (postfix === 'h') {
    unit = DateHistogramFieldSettings_Unit.HOUR;
    value = nearest(hourIntervals, number);
  } else if (postfix === 'd') {
    unit = DateHistogramFieldSettings_Unit.DAY;
    value = nearest(availableIntervals, number);
  } else if (postfix === 'm') {
    unit = DateHistogramFieldSettings_Unit.MINUTE;
    value = nearest(availableIntervals, number);
  } else {
    unit = DateHistogramFieldSettings_Unit.SECOND;
    value = nearest(availableIntervals, number);
  }

  return { unit, value: Math.trunc(value) };
}