import { FC, useEffect, useState } from 'react'
import '../../scss/One/OneButton.scss'
import oneButtonStyle from "../../data/OneData/oneButtonData";
import IOneButtonProps from '../../interface/Props/IOneButtonProps';
import getNowMobileState from '../../util/getNowMobileState';

const OneButton: FC<IOneButtonProps> = ({
  oneMain,
  oneButtonClick,
}) => {
  const [oneButtonShow, setOneButtonShow] = useState(false)
  const [buttonStyle, setButtonStyle] = useState({})

  useEffect(() => {
    if (oneMain.hitokoto !== undefined) {
      setOneButtonShow(true)
    }
  }, [oneMain])

  useEffect(() =>{
    setButtonStyle(oneButtonStyle(oneButtonShow))
  }, [oneButtonShow])

  useEffect(() => {
    getNowMobileState(() => {
      setButtonStyle(oneButtonStyle(true))
    })
  }, [])

  return (
    <div
      className='one_button'
      style={buttonStyle}
      onClick={() => oneButtonClick(true)}
    >
      <span>{oneMain.hitokoto}</span>
    </div>
  )
}

export default OneButton