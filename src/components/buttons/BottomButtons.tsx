import React, {FC, useState} from 'react';
import IButtonsProps from "../../interface/Props/IButtonsProps";
import '../../scss/buttons/BottomButtons.scss'
import hideImg from '../../img/hide.png';
import isHideAll from "../../util/isHideAll";

const BottomButtons: FC<IButtonsProps> = ({
  hideAllFn
}) => {
  const [hideAll, setHideAll] = useState(isHideAll());

  const hideAllUse = () => {
    hideAllFn(!hideAll);
    setHideAll(!hideAll);
    localStorage.setItem('hideAll', !hideAll + '');
  }
  return (
    <div className='bottom_button'>
      <div className='b_button' onClick={() => hideAllUse()}>
        <img src={hideImg} alt='' />
      </div>
    </div>
  );
}

export default BottomButtons