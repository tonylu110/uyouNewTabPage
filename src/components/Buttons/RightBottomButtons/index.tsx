import { useState } from 'react'
import '../../../scss/buttons/RightBottomButton.scss'
import infoImg from '../../../img/info.png'

function RightBottomButtons() {
  const [isWindowShow, setIsWindowShow] = useState(false)

  const showInfoWindow = () => {
    setIsWindowShow(true)
  }

  return (
    <>
      <div className='bottom_right_button'>
        <div className='br_button' onClick={() => showInfoWindow()}>
          <img src={infoImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default RightBottomButtons