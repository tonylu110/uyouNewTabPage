import IWeatherStyle from "../../interface/IWeatherStyle";

const weatherWindowStyle = (): IWeatherStyle => {
    let screenWidth = window.innerWidth;
    let weatherWindow = {
        width: '350px',
        height: '250px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        transform: ''
    }
    if (screenWidth < 768) {
        weatherWindow.width = '270px'
        weatherWindow.height = '310px'
        weatherWindow.flexDirection = 'column'
        weatherWindow.transform = 'translateX(' + (screenWidth - 350) / 2 + 'px) translateY(100px)'
    }
    return weatherWindow
}

export default weatherWindowStyle