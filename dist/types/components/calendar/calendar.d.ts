/// <reference types="react" />
interface ICalendar {
    selected?: Date | Date[];
    hovered?: number | null;
    onHoveredChange?: (value: number | null) => void;
    onSelect: (value: Date) => void;
    minMonth?: Date;
    maxMonth?: Date;
    calendarDate: Date;
    onCalendarChange: (value: Date) => void;
    filter?: [Date, Date][];
    className?: string;
}
declare const Calendar: ({ selected, hovered, onHoveredChange, onSelect, minMonth, maxMonth, calendarDate, onCalendarChange, filter, className, }: ICalendar) => JSX.Element;
export default Calendar;
