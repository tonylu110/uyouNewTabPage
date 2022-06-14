import { useEffect, useState } from 'react'
import TarRequest from '../../util/TarRequest'
import OneButton from './OneButton'
import OneWindow from './OneWindow'

const One = () => {
  const [oneMain, setOneMain] = useState({})
  const [oneWindowShow, setOneWindowShow] = useState(false)
  const [mobileShowButton, setMobileShowButton] = useState(true)

  const clickBlackBack = () => {
    setOneWindowShow(false)
  }

  useEffect(() => {
    TarRequest('get', 'https://v1.hitokoto.cn/', null, (res: any) => {
      setOneMain(res)
    })
  }, [])

  useEffect(() => {
    const originHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const resizeHandler = () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const activeElement = document.activeElement;
      if (resizeHeight < originHeight) {
        if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
          setMobileShowButton(false)
        }
      } else {
        setMobileShowButton(true)
      }
    }
    window.addEventListener('resize', resizeHandler);
  }, [])

  return (
    <>
      {mobileShowButton ? <OneButton oneMain={oneMain} oneButtonClick={(e: boolean) => setOneWindowShow(e)} /> : null}
      <OneWindow oneMain={oneMain} oneButtonClick={(e: boolean) => setOneWindowShow(e)} oneWindowShow={oneWindowShow} />
      <div
        className='black_back'
        style={oneWindowShow ? {
          zIndex: '20',
          backgroundColor: '#00000050'
        } : {}}
        onClick={() => clickBlackBack()}
      ></div>
    </>
  )
}

export default One