/// <reference types="react" />
declare type TDayLabel = {
    startValue?: string;
    onStartChange?: (value: string) => void;
    endValue?: string;
    onEndChange?: (value: string) => void;
    minStart?: string;
    maxStart?: string;
    minEnd?: string;
    maxEnd?: string;
};
declare const TimeInterval: ({ startValue, onStartChange, endValue, onEndChange, minStart, maxStart, minEnd, maxEnd, }: TDayLabel) => JSX.Element;
export default TimeInterval;
