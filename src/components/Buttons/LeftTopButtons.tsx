import { useEffect, useState } from 'react'
import '../../scss/buttons/LeftTopButtons.scss'
import getWeather from '../../util/getWeatherImg'
import TarRequest from '../../util/TarRequest'

const LeftTopButtons = () => {
  const [weatherImgShow, setWeatherImgShow] = useState(false)
  const [weatherImg, setWeatherImg] = useState('')

  useEffect(() => {
    TarRequest('get', 'https://mark.tnyl.xyz/weather/weather/baidu', {
      city: '苏州'
    }, (res) => {
      setWeatherImgShow(true)
      setWeatherImg(getWeather(res.weather[0].weather))
    })
  }, [])

  return (
    <div className='top_left_button'>
      <div className='tl_button'>
        {weatherImgShow ? <img src={weatherImg} alt="" /> : null}
      </div>
    </div>
  )
}

export default LeftTopButtons