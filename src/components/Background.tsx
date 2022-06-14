import { useEffect, useState } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import RightTopButtons from "./buttons/RightTopButtons";
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";
import BottomButtons from "./buttons/BottomButtons";
import RightBottomButtons from './buttons/RightBottomButtons';
import getNowMobileState from '../util/getNowMobileState';

const Background = () => {
  const checkMobile = new mobileCheck()
  const [isMobile, setIsMobile] = useState(checkMobile.isMobile())
  const [backgroundShow, setBackgroundShow] = useState(false)
  const background = checkMobile.getBackground().backgroundImage
  const backgroundHeight = checkMobile.getBackground().backgroundHeight
  const [hideAll, setHideAll] = useState(isHideAll())
  const [mobileShowButton, setMobileShowButton] = useState(true)

  const getHideAll = (e: boolean) => {
    setHideAll(e)
  }

  useEffect(() => {
    let img = new Image()
    img.src = background.slice(4, -1)
    img.onload = () => {
      setBackgroundShow(true)
    }
  }, [])

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

  return (
    <div
      className='background'
      style={{
        display: backgroundShow ? '' : 'none',
        backgroundImage: background,
        height: backgroundHeight
      }}
    >
      <MainArea hideAll={hideAll}/>
      {hideAll ? null : <One/>}
      {isMobile ?
        (mobileShowButton ? <BottomButtons hideAllFn={(e: boolean) => getHideAll(e)} /> : null) :
        <>
          <RightTopButtons hideAllFn={(e: boolean) => getHideAll(e)} />
          <RightBottomButtons />
        </>
      }
    </div>
  )
}

export default Background