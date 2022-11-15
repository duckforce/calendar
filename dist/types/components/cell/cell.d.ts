import React from 'react';
interface ICalendarCell {
    date: Date;
    inRange: boolean;
    selected: boolean;
    disabled: boolean;
    onClick: (value: Date) => void;
    onMouseEnter: (value: Date) => void;
}
declare const Cell: React.MemoExoticComponent<({ date, inRange, selected, disabled, onClick, onMouseEnter }: ICalendarCell) => JSX.Element>;
export default Cell;
