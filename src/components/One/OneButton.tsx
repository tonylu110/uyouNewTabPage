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
      className={`${oneButtonShow ? 'bottom-[20vh] md:bottom-[20px]' : '-bottom-[200px]'} w-auto fixed max-w-[280px] text-center px-[20px] md:max-w-[500px] overflow-hidden overflow-ellipsis text-black btn`}
      onClick={() => oneButtonClick(true)}
    >
      <span className='no-underline font-bold text-[13.5px] overflow-hidden overflow-ellipsis whitespace-nowrap select-none'>{oneMain.hitokoto}</span>
    </div>
  )
}

export default OneButton