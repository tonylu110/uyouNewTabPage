import { useEffect, useState } from 'react'
import TarRequest from '../../util/TarRequest'
import OneButton from './OneButton'
import OneWindow from './OneWindow'

const One = () => {
  const [oneMain, setOneMain] = useState({})
  const [oneWindowShow, setOneWindowShow] = useState(false)

  const clickBlackBack = () => {
    setOneWindowShow(false)
  }

  useEffect(() => {
    TarRequest('get', 'https://v1.hitokoto.cn/', null, (res: any) => {
      setOneMain(res)
    })
  }, [])

  return (
    <>
      <OneButton oneMain={oneMain} oneButtonClick={(e: boolean) => setOneWindowShow(e)} />
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