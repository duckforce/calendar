import type { ReactNode } from 'react';
import React from 'react';
declare type TDayLabel = {
    title?: string;
    children?: ReactNode;
};
declare const DayLabel: React.MemoExoticComponent<({ title, children }: TDayLabel) => JSX.Element>;
export default DayLabel;
