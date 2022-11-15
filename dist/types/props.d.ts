import type { ReactNode } from 'react';
declare type TStyleOptions = {
    weekendHighlight?: boolean;
    navigationButtons?: boolean;
};
declare type TBase = {
    filter?: [string, string][];
    timeZone?: string;
    minDate?: Date;
    styleOptions?: TStyleOptions;
};
export declare type TBasicPicker = TBase & {
    type?: 'basic';
    onChange?: (value?: string) => void;
    selected?: string;
    clearable?: boolean;
    children?: ReactNode;
};
export declare type TRangePicker = TBase & {
    type?: 'range';
    onChange?: (value: string[]) => void;
    selected?: string[];
};
export {};
