import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'

export default class Background extends Component<any, any> {
  constructor(props: any) {
    super(props)
    let screenHeight: number = document.documentElement.clientHeight
    let screenWidth: number = window.innerWidth
    let backgroundImage: string = 'url(https://dev.iw233.cn/api.php?sort=pc)'
    let backgroundHeight: string = ''
    let isMobile: boolean = false
    if (screenWidth < 768) {
      isMobile = true
      backgroundImage = 'url(https://dev.iw233.cn/api.php?sort=mp)'
      backgroundHeight = screenHeight + 'px'
    }
    this.state = {
      isMobile: isMobile,
      backgroundShow: false,
      background: backgroundImage,
      backgroundHeight: backgroundHeight
    }
  }
  render() {
    let img: HTMLImageElement = document.createElement('img');
    img.src = this.state.isMobile ? 'https://dev.iw233.cn/api.php?sort=mp' : 'https://dev.iw233.cn/api.php?sort=pc';
    img.onload = () => {
      this.setState({
        backgroundShow: true
      })
    }
    return (
      <div 
        className='background' 
        style={{
          display: this.state.backgroundShow ? '' : 'none',
          backgroundImage: this.state.background,
          height: this.state.backgroundHeight
        }}
      >
        <MainArea />
        <One />
      </div>
    )
  }
}
