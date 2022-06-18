const getCity = (): string => {
    let city = localStorage.getItem('city')
    if (city === null) {
      city = '北京'
    }
    return city
}

export default getCity