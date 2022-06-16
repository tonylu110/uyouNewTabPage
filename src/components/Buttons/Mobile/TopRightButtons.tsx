import { useState } from 'react'
import infoImg from '../../../img/info.png'
import InfoWindow from './InfoWindow'

const TopRightButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='top_right_button'>
        <div className='tr_button' onClick={() => setIsWindowShow(true)}>
          <img src={infoImg} alt="" />
        </div>
      </div>
      <InfoWindow infoWindowShow={isWindowShow} clickCloseButton={(e: boolean) => setIsWindowShow(e)} />
      <div
        className='black_back'
        style={isWindowShow ? {
          zIndex: '10',
          backgroundColor: '#00000050'
        } : {}}
        onClick={() => setIsWindowShow(false)}
      ></div>
    </>
  )
}

export default TopRightButtons