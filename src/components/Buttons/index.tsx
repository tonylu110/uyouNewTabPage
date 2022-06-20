import BottomButtons from "./Mobile/BottomButtons";
import RightTopButtons from "./RightTopButtons";
import RightBottomButtons from "./RightBottomButtons";
import mobileCheck from "../../util/isMobile";
import { FC, useEffect, useState } from "react";
import IButtonsProps from "../../interface/Props/IButtonsProps";
import getNowMobileState from "../../util/getNowMobileState";
import TopRightButtons from "./Mobile/TopRightButtons";
import LeftTopButtons from "./LeftTopButtons";

const Buttons: FC<IButtonsProps> = ({
  hideAllFn,
  calculatorUse
}) => {
  const checkMobile = new mobileCheck()

  const [isMobile, setIsMobile] = useState(checkMobile.isMobile())
  const [mobileShowButton, setMobileShowButton] = useState(true)
  const [showCalculator, setShowCalculator] = useState(false)
  const [hideAll, setHideAll] = useState(false)

  useEffect(() => {
    getNowMobileState((isMobile: boolean) => {
      setIsMobile(isMobile)
    })
  }, [])

  useEffect(() => {
    calculatorUse(showCalculator)
  }, [showCalculator])

  useEffect(() => {
    const originHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const resizeHandler = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const activeElement = document.activeElement;
      if (resizeHeight < originHeight) {
        if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
          setMobileShowButton(false)
        }
      } else {
        setMobileShowButton(true)
      }
    }
    window.addEventListener('resize', resizeHandler);
  }, [])

  const getHideAll = (e: boolean) => {
    hideAllFn(e)
    setHideAll(e)
  }

  return(
    <>
      {isMobile ?
        <>
          {mobileShowButton ? <BottomButtons calculatorUse={(e: boolean) => setShowCalculator(e)} hideAllFn={(e: boolean) => getHideAll(e)} /> : null}
          {showCalculator || hideAll ? null : <TopRightButtons />}
        </> :
        <>
          <RightTopButtons calculatorUse={(e: boolean) => setShowCalculator(e)} hideAllFn={(e: boolean) => getHideAll(e)} />
          {showCalculator || hideAll ? null : <RightBottomButtons />}
        </>
      }
      {showCalculator || hideAll ? null : <LeftTopButtons />}
    </>
  )
}

export default Buttons