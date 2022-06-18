import { FC, useEffect, useState } from "react";
import '../../scss/buttons/WeatherWindow.scss'
import weatherWindowStyle from "../../data/WeatherData/WeatherWindowStyle";
import IWeatherWindowProps from "../../interface/Props/IWeatherWindowProps";
import mobileCheck from "../../util/isMobile";
import getWeather from "../../util/getWeatherImg";

const WeatherWindow: FC<IWeatherWindowProps> = ({
  showWeaherButton,
  weatherImg,
  city,
  weatherInfo,
  showWeatherWindow,
  setCity,
}) => {
  const [weatherWindowShowStyle, setWeatherWindowShowStyle] = useState({})
  const [weatherImgShowStyle, setWeatherImgShowStyle] = useState({})
  const [showWeatherInfo, setShowWeatherInfo] = useState(false)
  const [isMobile, setIsMobile] = useState(new mobileCheck().isMobile)
  const [cityTemp, setCityTemp] = useState('北京')

  const citySet = (e: any) => {
    localStorage.setItem('city', e.target.value)
    setCityTemp(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setWeatherWindowShowStyle(weatherWindowStyle)
      setWeatherImgShowStyle({
        width: '60px',
        height: '60px'
      })
    }, 1)
    setTimeout(() => {
      setShowWeatherInfo(true)
    }, 300)
  }, [])

  return (
    <>
      {!showWeaherButton ? (
        <div className='top_left_button'>
          <div className='tl_button weather' style={weatherWindowShowStyle}>
            <img src={weatherImg} style={weatherImgShowStyle} alt="" onClick={() => showWeatherWindow(true)} />
            {showWeatherInfo ? (
              <div className="weather_main" style={{
                margin: isMobile ? '10px 0px 0px 0px' : '',
                fontSize: isMobile ? '12px' : '8px'
              }}>
                <div className="weather_city">
                  <input type="text" onKeyUp={citySet} placeholder={"当前城市：" + city} />
                  <div onClick={() => setCity}>确定</div>
                </div>
                <div className="day_weather" style={{ top: isMobile ? '137px' : '' }}>
                  <div className="today_weather">{weatherInfo.weather[0].weather}</div>
                  <div>今日气温：{weatherInfo.weather[0].temp}</div>
                  <div className="fea_weather">
                    <div className="fea_weatherbox">
                      <div className="weather_time">明天</div>
                      <div>{weatherInfo.weather[1].weather}</div>
                      <img src={getWeather(weatherInfo.weather[1].weather)} alt='' />
                      <div>{weatherInfo.weather[1].temp}</div>
                    </div>
                    <div className="fea_weatherbox">
                      <div className="weather_time">后天</div>
                      <div>{weatherInfo.weather[2].weather}</div>
                      <img src={getWeather(weatherInfo.weather[2].weather)} alt='' />
                      <div>{weatherInfo.weather[2].temp}</div>
                    </div>
                    <div className="fea_weatherbox">
                      <div className="weather_time">{weatherInfo.weather[3].date.split('（')[0]}</div>
                      <div>{weatherInfo.weather[3].weather}</div>
                      <img src={getWeather(weatherInfo.weather[3].weather)} alt='' />
                      <div>{weatherInfo.weather[3].temp}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default WeatherWindow