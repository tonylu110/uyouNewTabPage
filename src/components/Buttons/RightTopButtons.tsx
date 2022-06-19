import { FC, useState } from 'react';
import hideImg from '../../img/hide.png';
import reloadImg from '../../img/reload.png'
import calImg from '../../img/calculator.png'
import '../../scss/buttons/RightTopButtons.scss'
import isHideAll from "../../util/isHideAll";
import IButtonsProps from "../../interface/Props/IButtonsProps";
import Calculator from './Calculator';

const RightTopButtons: FC<IButtonsProps> = ({
  hideAllFn,
  calculatorUse
}) => {
  const [hideAll, setHideAll] = useState(isHideAll)
  const [showCalculator, setShowCalculator] = useState(false)

  const hideAllUse = () => {
    hideAllFn(!hideAll);
    setHideAll(!hideAll);
    localStorage.setItem('hideAll', !hideAll + '');
  }

  const useCalculator = () => {
    setShowCalculator(!showCalculator)
    calculatorUse(!showCalculator)
  }

  return (
    <>
      <div className='top_right_button'>
        {showCalculator ? null : (
          <div className='tr_button' onClick={() => hideAllUse()}>
            <img src={hideImg} alt="" />
          </div>
        )}
        {hideAll ? null : (
          <>
            {showCalculator ? null : (
              <div className='tr_button' onClick={() => window.location.reload()}>
                <img src={reloadImg} alt="" />
              </div>
            )}
            <div className='tr_button' onClick={() => useCalculator()}>
              <img src={calImg} alt="" />
            </div>
          </>
        )}
      </div>
      {showCalculator ? <Calculator /> : null}
    </>
  )
}

export default RightTopButtons;