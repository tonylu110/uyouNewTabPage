import { useEffect, useState } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";
import Buttons from './Buttons';

const Background = () => {
  const checkMobile = new mobileCheck()
  const [backgroundShow, setBackgroundShow] = useState(false)
  const background = checkMobile.getBackground().backgroundImage
  const backgroundHeight = checkMobile.getBackground().backgroundHeight
  const [hideAll, setHideAll] = useState(isHideAll())

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
      <Buttons hideAllFn={(e: boolean) => setHideAll(e)} />
    </div>
  )
}

export default Background