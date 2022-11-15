import type { ReactNode } from 'react';
import React, { memo } from 'react';

import cn from 'classnames';

// import BackIcon from '../../../icons/ChevronBackIcon';
// import ForwardIcon from '../../../icons/ChevronNextIcon';
// import IconContainer from '../../../icons/IconContainer';

import chevronBack from './chevron-back.svg';
import chevronNext from './chevron-next.svg';
import s from './slider.module.less';

type TSlider = {
  backDisabled?: boolean;
  onBackClick: () => void;
  forwardDisabled?: boolean;
  onForwardClick: () => void;
  children?: ReactNode;
};

const Slider = memo(
  ({ onBackClick, onForwardClick, backDisabled, forwardDisabled, children }: TSlider) => (
    <div className={cn(s.slider)}>
      <img src={chevronBack} className={s.button} alt="logo" onClick={onBackClick}/>
      {/* <IconContainer className={cn(s.sliderArrow)} onClick={onBackClick} size="S">
        <BackIcon fillColor={backDisabled ? 'gray30' : 'blue'} size="S" />
      </IconContainer> */}
      <div className={cn(s.sliderContent)}>{children}</div>
      {/* <IconContainer className={cn(s.sliderArrow)} onClick={onForwardClick} size="S">
        <ForwardIcon fillColor={forwardDisabled ? 'gray30' : 'blue'} size="S" />
      </IconContainer> */}
      <img src={chevronNext} className={s.button} alt="logo" onClick={onForwardClick} />
    </div>
  ),
);

export default Slider;
