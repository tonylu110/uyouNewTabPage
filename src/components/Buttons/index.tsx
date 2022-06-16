import BottomButtons from "./Mobile/BottomButtons";
import RightTopButtons from "./RightTopButtons";
import RightBottomButtons from "./RightBottomButtons";
import mobileCheck from "../../util/isMobile";
import { FC, useEffect, useState } from "react";
import IButtonsProps from "../../interface/Props/IButtonsProps";
import getNowMobileState from "../../util/getNowMobileState";
import TopRightButtons from "./Mobile/TopRightButtons";

const Buttons: FC<IButtonsProps> = ({
  hideAllFn
}) => {
  const checkMobile = new mobileCheck()

  const [isMobile, setIsMobile] = useState(checkMobile.isMobile())
  const [mobileShowButton, setMobileShowButton] = useState(true)

  useEffect(() => {
    getNowMobileState((isMobile: boolean) => {
      setIsMobile(isMobile)
    })
  }, [])

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
  }

  return(
    <>
      {isMobile ?
        <>
          {mobileShowButton ? <BottomButtons hideAllFn={(e: boolean) => getHideAll(e)} /> : null}
          <TopRightButtons />
        </> :
        <>
          <RightTopButtons hideAllFn={(e: boolean) => getHideAll(e)} />
          <RightBottomButtons />
        </>
      }
    </>
  )
}

export default Buttons