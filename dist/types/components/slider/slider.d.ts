import type { ReactNode } from 'react';
import React from 'react';
declare type TSlider = {
    backDisabled?: boolean;
    onBackClick: () => void;
    forwardDisabled?: boolean;
    onForwardClick: () => void;
    children?: ReactNode;
};
declare const Slider: React.MemoExoticComponent<({ onBackClick, onForwardClick, backDisabled, forwardDisabled, children }: TSlider) => JSX.Element>;
export default Slider;
