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

// Precomputed constants to avoid repeated multiplications
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;

const RATIO = Borders.max / Borders.min; // 150 / 40 = 3.75
const LOG_RATIO = Math.log(RATIO);

const availableIntervals: readonly number[] = [1, 2, 5, 10, 15, 30];
const hourIntervals: readonly number[] = [1, 2, 6];

function getPower(totalSeconds: number): number {
  // ceil( log_{RATIO} ( totalSeconds / Borders.max ) )
  return Math.ceil(Math.log(totalSeconds / Borders.max) / LOG_RATIO);
}

function nearest(list: readonly number[], target: number): number {
  let best = list[0];
  let bestDiff = Math.abs(best - target);
  for (let i = 1; i < list.length; i += 1) {
    const diff = Math.abs(list[i] - target);
    if (diff < bestDiff) {
      best = list[i];
      bestDiff = diff;
    }
  }
  return best;
}

type CropPostfix = 'M' | 'd' | 'h' | 'm' | 's';

type CropResult = { postfix: CropPostfix; number: number };

function cropInterval(intervalSeconds: number): CropResult {
  if (intervalSeconds > MONTH) {
    return { postfix: 'M', number: intervalSeconds / MONTH };
  }
  if (intervalSeconds > DAY) {
    return { postfix: 'd', number: intervalSeconds / DAY };
  }
  if (intervalSeconds > HOUR) {
    return { postfix: 'h', number: intervalSeconds / HOUR };
  }
  if (intervalSeconds > MINUTE) {
    return { postfix: 'm', number: intervalSeconds / MINUTE };
  }
  return { postfix: 's', number: intervalSeconds };
}

export function GetInterval(
  fromTime: Date,
  toTime: Date,
): { unit: DateHistogramFieldSettings_Unit; value: number } {
  const deltaSeconds = Math.abs((toTime.getTime() - fromTime.getTime()) / 1000);

  // Determine a base interval length in seconds
  const power = getPower(deltaSeconds);
  const intervalSeconds = Math.pow(RATIO, power);

  const { postfix, number } = cropInterval(intervalSeconds);

  if (postfix === 'M') {
    // Elastic допускает только 1M
    return { unit: DateHistogramFieldSettings_Unit.MONTH, value: 1 };
  }

  if (postfix === 'h') {
    return {
      unit: DateHistogramFieldSettings_Unit.HOUR,
      value: Math.trunc(nearest(hourIntervals, number)),
    };
  }

  const unitMap: Record<Exclude<CropPostfix, 'M' | 'h'>, DateHistogramFieldSettings_Unit> = {
    d: DateHistogramFieldSettings_Unit.DAY,
    m: DateHistogramFieldSettings_Unit.MINUTE,
    s: DateHistogramFieldSettings_Unit.SECOND,
  };

  const unit = unitMap[postfix as 'd' | 'm' | 's'];
  const value = Math.trunc(nearest(availableIntervals, number));

  return { unit, value };
}