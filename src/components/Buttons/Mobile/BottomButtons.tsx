import { FC, useState } from 'react';
import IButtonsProps from "../../../interface/Props/IButtonsProps";
import '../../../scss/buttons/BottomButtons.scss'
import hideImg from '../../../img/hide.png';
import reloadImg from '../../../img/reload.png';
import calImg from '../../../img/calculator.png';
import isHideAll from "../../../util/isHideAll";
import Calculator from '../Calculator';

const BottomButtons: FC<IButtonsProps> = ({
  hideAllFn,
  calculatorUse
}) => {
  const [hideAll, setHideAll] = useState(isHideAll());
  const [showCalculator, setShowCalculator] = useState(false);

  const hideAllUse = () => {
    hideAllFn(!hideAll);
    setHideAll(!hideAll);
    localStorage.setItem('hideAll', !hideAll + '');
  }

  const useCalculator = () => {
    setShowCalculator(!showCalculator);
    calculatorUse(!showCalculator);
  }

  return (
    <>
      <div className='bottom_button'>
        {showCalculator ? null : (
          <div className='b_button' onClick={() => hideAllUse()}>
            <img src={hideImg} alt='' />
          </div>
        )}
        {hideAll ? null : (
          <>
            {showCalculator ? null : (
              <div className='b_button' onClick={() => window.location.reload()}>
                <img src={reloadImg} alt='' />
              </div>
            )}
            <div className='b_button' onClick={() => useCalculator()}>
              <img src={calImg} alt='' />
            </div>
          </>
        )}
      </div>
      {showCalculator ? <Calculator /> : null}
    </>
  );
}

export default BottomButtons