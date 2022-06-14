import { FC, useEffect, useState } from 'react'
import '../../scss/One/OneButton.scss'
import oneButtonStyle from "../../data/OneData/oneButtonData";
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
      className='one_button'
      style={oneButtonStyle(oneButtonShow)}
      onClick={() => oneButtonClick(true)}
    >
      <span>{oneMain.hitokoto}</span>
    </div>
  )
}

export default OneButton