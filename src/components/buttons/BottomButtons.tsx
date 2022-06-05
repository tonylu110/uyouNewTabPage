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
    if (!hideAll) {
      hideAllFn(true)
      setHideAll(true)
      localStorage.setItem('hideAll', 'true')
    } else {
      hideAllFn(false)
      setHideAll(false)
      localStorage.setItem('hideAll', 'false')
    }
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