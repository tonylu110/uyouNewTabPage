import { FC } from 'react'
import closeImg from '../../img/close.png'
import IOneWindowProps from '../../interface/Props/IOneWindowProps';

const OneWindow: FC<IOneWindowProps> = ({
  oneMain,
  oneButtonClick,
  oneWindowShow
}) => {
  return (
    <div className={`w-[350px] h-[480px] p-[40px] bottom-[-50vh] ${oneWindowShow ? 'bottom-[calc(50%-240px)] md:bottom-[calc(50%-200px)]' : 'md:bottom-[-170px]'} ${oneWindowShow ? 'scale-100' : 'scale-0'} fixed z-[21] md:w-[650px] md:h-[400px] bg-white/60 shadow-2xl backdrop-blur rounded-[20px] flex flex-row border-t-[2px] border-r-[2px] border-solid border-white/50 transform duration-500`}>
      <div className='close-btn'
        onClick={() => oneButtonClick(false)}
      >
        <img className='w-[100%] h-[100%]' src={closeImg} alt="" />
      </div>
      <div className='h-[100%] w-[100%] flex flex-col justify-between'>
        <span className='text-[20px] font-bold md:text-[25px] text-black'>#{oneMain.id}</span>
        <span className='text-[30px] font-bold md:text-[35px] text-black text-center'>{oneMain.hitokoto}</span>
        <span className='text-[25px] font-bold md:text-[30px] text-black text-right'>———{oneMain.from}</span>
      </div>
    </div>
  )
}

export default OneWindow