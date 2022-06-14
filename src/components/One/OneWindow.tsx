import { FC, useState } from 'react'
import '../../scss/One/OneWindow.scss'
import oneWindowStyle from "../../data/OneData/oneWindowOpenData";
import closeImg from '../../img/close.png'
import oneWindowMobileFontSize from "../../data/OneData/oneWindowMobileFontSize";
import mobileCheck from "../../util/isMobile";
import IOneWindowProps from '../../interface/Props/IOneWindowProps';

const OneWindow: FC<IOneWindowProps> = ({
  oneMain,
  oneButtonClick,
  oneWindowShow
}) => {
  const isMobile = new mobileCheck().isMobile()

  return (
    <div className='one_main' style={oneWindowStyle(oneWindowShow)}>
      <div className='close_button' onClick={() => oneButtonClick(false)}>
        <img src={closeImg} alt="" />
      </div>
      <div className='one_main_info'>
        <span className='one_num' style={{fontSize: oneWindowMobileFontSize(isMobile)}}>#{oneMain.id}</span>
        <span className='one_text' style={{fontSize: oneWindowMobileFontSize(isMobile)}}>{oneMain.hitokoto}</span>
        <span className='one_from' style={{fontSize: oneWindowMobileFontSize(isMobile)}}>———{oneMain.from}</span>
      </div>
    </div>
  )
}

export default OneWindow