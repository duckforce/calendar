import React from 'react';
declare type TMonthYearsPanel = {
    values: string[];
    selected: string;
    disabled?: string[];
    onSelect: (value: number) => void;
    today?: string;
};
declare const MonthsYearsPanel: React.MemoExoticComponent<({ values, selected, disabled, onSelect, today }: TMonthYearsPanel) => JSX.Element>;
export default MonthsYearsPanel;
