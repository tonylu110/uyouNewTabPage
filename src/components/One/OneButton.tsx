import { FC, useEffect, useState } from 'react'
import IOneButtonProps from '../../interface/Props/IOneButtonProps';

const OneButton: FC<IOneButtonProps> = ({
  oneMain,
  oneButtonClick,
}) => {
  const [oneButtonShow, setOneButtonShow] = useState(false)

  useEffect(() => {
    if (oneMain.hitokoto !== undefined) {
      setOneButtonShow(true)
    }
  }, [oneMain])

  return (
    <div
      className={`${oneButtonShow ? 'mb-[20vh]' : '-mb-[200px]'} max-w-[280px] fixed bottom-0 bg-white-90 rounded-[50px] shadow-2xl backdrop-blur ${oneButtonShow ? 'md:mb-[20px]' : '-mb-[200px]'} cursor-pointer h-[50px] leading-[50px] text-center px-[20px] md:max-w-[500px] overflow-hidden overflow-ellipsis text-black active:bg-white-70`}
      onClick={() => oneButtonClick(true)}
    >
      <span className='no-underline font-bold text-[13.5px] overflow-hidden overflow-ellipsis whitespace-nowrap select-none'>{oneMain.hitokoto}</span>
    </div>
  )
}

export default OneButton