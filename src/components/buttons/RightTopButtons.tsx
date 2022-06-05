import React, {FC, useState} from 'react';
import hideImg from '../../img/hide.png';
import '../../scss/buttons/RightTopButtons.scss'
import isHideAll from "../../util/isHideAll";
import IButtonsProps from "../../interface/Props/IButtonsProps";

const RightTopButtons: FC<IButtonsProps> = ({
  hideAllFn
}) => {
  const [hideAll, setHideAll] = useState(isHideAll)

  const hideAllUse = () => {
    hideAllFn(!hideAll);
    setHideAll(!hideAll);
    localStorage.setItem('hideAll', !hideAll + '');
  }

  return (
    <div className='top_right_button'>
      <div className='tr_button' onClick={() => hideAllUse()}>
        <img src={hideImg} alt="" />
      </div>
    </div>
  )
}

export default RightTopButtons;