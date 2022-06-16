import { useState } from 'react'
import '../../scss/buttons/RightBottomButton.scss'
import infoImg from '../../img/info.png'
import InfoWindow from './InfoWindow'

const RightBottomButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='bottom_right_button'>
        <div className='br_button' onClick={() => setIsWindowShow(true)}>
          <img src={infoImg} alt="" />
        </div>
      </div>
      <InfoWindow infoWindowShow={isWindowShow} clickCloseButton={(e: boolean) => setIsWindowShow(e)} />
      <div
        className='black_back'
        style={isWindowShow ? {
          zIndex: '20',
          backgroundColor: '#00000050'
        } : {}}
        onClick={() => setIsWindowShow(false)}
      ></div>
    </>
  )
}

export default RightBottomButtons