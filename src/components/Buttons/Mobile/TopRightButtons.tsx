import { useState } from 'react'
import infoImg from '../../../img/info.png'
import InfoWindow from '../InfoWindow'

const TopRightButtons = () => {
  const [isWindowShow, setIsWindowShow] = useState(false)

  return (
    <>
      <div className='fixed right-0 z-10 top-0 mt-[20px] mr-[20px]'>
        <div
          className='active:bg-white/50 w-[50px] h-[50px] p-[10px] bg-white/60 shadow-2xl backdrop-blur cursor-pointer rounded-[50%]'
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

export default TopRightButtons