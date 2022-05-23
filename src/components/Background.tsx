import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'

export default class Background extends Component<any, any> {
  constructor(props: Object) {
    super(props)
    let screenHeight: number = document.documentElement.clientHeight
    let screenWidth: number = window.innerWidth
    let backgroundImage: string = 'url(https://dev.iw233.cn/api.php?sort=pc)'
    let backgroundHeight: string = ''
    if (screenWidth < 768) {
      backgroundImage = 'url(https://dev.iw233.cn/api.php?sort=mp)'
      backgroundHeight = screenHeight + 'px'
    }
    this.state = {
      background: backgroundImage,
      backgroundHeight: backgroundHeight
    }
  }
  render() {
    return (
      <div 
        className='background' 
        style={{
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
