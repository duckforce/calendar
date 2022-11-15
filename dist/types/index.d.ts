/// <reference types="react" />
import TimeInterval from './components/time-interval';
import type { TBasicPicker, TRangePicker } from './props';
export declare type TCalendar = TBasicPicker | TRangePicker;
declare const Calendar: ({ type, ...props }: TCalendar) => JSX.Element;
declare type CalendarWithComponentsType = typeof Calendar & {
    TimeInterval: typeof TimeInterval;
};
declare const _default: CalendarWithComponentsType;
export default _default;
