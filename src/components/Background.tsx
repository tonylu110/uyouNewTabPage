import React, {useEffect, useState} from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import RightTopButtons from "./buttons/RightTopButtons";
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";
import BottomButtons from "./buttons/BottomButtons";

const Background = () => {
  const checkMobile = new mobileCheck()
  const [isMobile, setIsMobile] = useState(checkMobile.isMobile())
  const [backgroundShow, setBackgroundShow] = useState(false)
  const [background, setBackground] = useState(checkMobile.getBackground().backgroundImage)
  const [backgroundHeight, setBackgroundHeight] = useState(checkMobile.getBackground().backgroundHeight)
  const [hideAll, setHideAll] = useState(isHideAll())

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
        <BottomButtons hideAllFn={(e: boolean) => getHideAll(e)} /> :
        <RightTopButtons hideAllFn={(e: boolean) => getHideAll(e)} />
      }
    </div>
  )
}

export default Background