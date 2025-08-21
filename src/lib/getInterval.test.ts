import { describe, it, expect } from 'vitest';
import { GetInterval, DateHistogramFieldSettings_Unit } from './getInterval';

function datesFromDeltaSeconds(seconds: number): [Date, Date] {
  const from = new Date(0);
  const to = new Date(seconds * 1000);
  return [from, to];
}

describe('GetInterval', () => {
  it('returns 1s for very small ranges (~seconds)', () => {
    const [from, to] = datesFromDeltaSeconds(30);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.SECOND, value: 1 });
  });

  it('returns 15s around ~10 minutes range', () => {
    const [from, to] = datesFromDeltaSeconds(10 * 60);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.SECOND, value: 15 });
  });

  it('returns 2m around ~3 hours range', () => {
    const [from, to] = datesFromDeltaSeconds(3 * 60 * 60);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.MINUTE, value: 2 });
  });

  it('returns 10m for ~12 hours and ~1 day ranges', () => {
    const [f1, t1] = datesFromDeltaSeconds(12 * 60 * 60);
    const [f2, t2] = datesFromDeltaSeconds(24 * 60 * 60);
    expect(GetInterval(f1, t1)).toEqual({ unit: DateHistogramFieldSettings_Unit.MINUTE, value: 10 });
    expect(GetInterval(f2, t2)).toEqual({ unit: DateHistogramFieldSettings_Unit.MINUTE, value: 10 });
  });

  it('returns 30m for ~3 days range', () => {
    const [from, to] = datesFromDeltaSeconds(3 * 24 * 60 * 60);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.MINUTE, value: 30 });
  });

  it('returns 2h for ~10 days range', () => {
    const [from, to] = datesFromDeltaSeconds(10 * 24 * 60 * 60);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.HOUR, value: 2 });
  });

  it('returns 2d for ~3 months range', () => {
    const [from, to] = datesFromDeltaSeconds(90 * 24 * 60 * 60);
    const result = GetInterval(from, to);
    expect(result).toEqual({ unit: DateHistogramFieldSettings_Unit.DAY, value: 2 });
  });
});