import { useEffect, useState } from 'react'
import '../../scss/buttons/LeftTopButtons.scss'
import getCity from '../../util/getCity'
import getWeather from '../../util/getWeatherImg'
import TarRequest from '../../util/TarRequest'
import WeatherWindow from './WeatherWindow'

const LeftTopButtons = () => {
  const [weatherImgShow, setWeatherImgShow] = useState(false)
  const [weatherImg, setWeatherImg] = useState('')
  const [showWeaherButton, setShowWeaherButton] = useState(true)
  const [city, setCity] = useState(getCity)
  const [weatherInfo, setWeatherInfo] = useState({})

  const getWeatherInfo = () => {
    TarRequest('get', 'https://mark.tnyl.xyz/weather/weather/baidu', {
      city: city
    }, (res) => {
      setWeatherImgShow(true)
      setWeatherImg(getWeather(res.weather[0].weather))
      setWeatherInfo(res)
    })
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      {showWeaherButton ? (
        <div className='top_left_button'>
          <div className='tl_button' onClick={() => setShowWeaherButton(false)}>
            {weatherImgShow ? <img src={weatherImg} alt="" /> : null}
          </div>
        </div>
      ) : <WeatherWindow 
        showWeaherButton={showWeaherButton}
        weatherImg={weatherImg}
        city={city}
        weatherInfo={weatherInfo}
        showWeatherWindow={(e: boolean) => setShowWeaherButton(e)}
        setCity={(e: string) => {
          setCity(e)
          setTimeout(() => {
            getWeatherInfo()
          }, 5)
        }}
        />
      }
    </>
  )
}

export default LeftTopButtons