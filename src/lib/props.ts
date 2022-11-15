import type { ReactNode } from 'react';

type TStyleOptions = {
  weekendHighlight?: boolean;
  navigationButtons?: boolean;
};

type TBase = {
  filter?: [string, string][];
  timeZone?: string;
  minDate?: Date;
  styleOptions?: TStyleOptions
};

export type TBasicPicker = TBase & {
  type?: 'basic';
  onChange?: (value?: string) => void;
  selected?: string;
  clearable?: boolean;
  children?: ReactNode;
};

export type TRangePicker = TBase & {
  type?: 'range';
  onChange?: (value: string[]) => void;
  selected?: string[];
};
