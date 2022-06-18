interface IWeatherWindowProps {
    showWeaherButton: boolean
    weatherImg: string
    city: string
    weatherInfo: any
    setCity: (e: string) => void
    showWeatherWindow: (e: boolean) => void
}

export default IWeatherWindowProps