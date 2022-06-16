import { useState } from 'react'
import '../../scss/buttons/RightBottomButton.scss'
import infoImg from '../../img/info.png'

const RightBottomButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='bottom_right_button'>
        <div className='br_button' onClick={() => setIsWindowShow(true)}>
          <img src={infoImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default RightBottomButtons