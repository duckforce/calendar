import React from 'react';
export declare type TMonthPanel = {
    selected: Date;
    onSelect: (value: Date) => void;
    min?: Date;
    max?: Date;
    filter?: [Date, Date][];
};
declare const MonthsPanel: React.MemoExoticComponent<({ selected, onSelect, min, max, filter }: TMonthPanel) => JSX.Element>;
export default MonthsPanel;
