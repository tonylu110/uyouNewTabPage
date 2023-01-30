import { useState } from 'react'
import infoImg from '../../img/info.png'
import InfoWindow from './InfoWindow'

const RightBottomButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='fixed right-0 z-10 bottom-0 mb-[20px] mr-[20px]'>
        <div
          className='btn'
          onClick={() => setIsWindowShow(true)}
        >
          <img src={infoImg} alt="" />
        </div>
      </div>
      <InfoWindow infoWindowShow={isWindowShow} clickCloseButton={(e: boolean) => setIsWindowShow(e)} />
      <div
        className={`black-back ${isWindowShow ? 'z-20 bg-bb-show' : ''}`}
        onClick={() => setIsWindowShow(false)}
      ></div>
    </>
  )
}

export default RightBottomButtons