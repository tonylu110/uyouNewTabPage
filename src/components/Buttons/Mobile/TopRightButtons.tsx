import { useState } from 'react'
import infoImg from '../../../img/info.png'

const TopRightButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='top_right_button'>
        <div className='tr_button' onClick={() => setIsWindowShow(true)}>
          <img src={infoImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default TopRightButtons