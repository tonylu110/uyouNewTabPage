import cloudImg from '../img/weather/00.png'
import clearImg from '../img/weather/01.png'
import cloudyImg from '../img/weather/02.png'
import snowImg from '../img/weather/03.png'
import rainImg from '../img/weather/04.png'
import otherImg from '../img/dLinkIcon.png'

const getWeather = (weather: string): string => { 
    let weatherImg: string
    if (weather.search('多云') !== -1) {
        weatherImg = cloudImg
    } else if (weather.search('晴') !== -1) {
        weatherImg = clearImg
    } else if (weather.search('阴') !== -1) {
        weatherImg = cloudyImg
    } else if (weather.search('雪') !== -1) {
        weatherImg = snowImg
    } else if (weather.search('雨') !== -1) {
        weatherImg = rainImg
    } else {
        weatherImg = otherImg
    }
    return weatherImg
}

export default getWeather