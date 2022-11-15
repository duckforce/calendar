import React from 'react';
export declare type TYearsPanel = {
    selected: Date;
    onSelect: (value: Date) => void;
    max?: Date;
    min?: Date;
    filter?: [Date, Date][];
};
declare const YearsPanel: React.MemoExoticComponent<({ selected, onSelect, min, max, filter }: TYearsPanel) => JSX.Element>;
export default YearsPanel;
