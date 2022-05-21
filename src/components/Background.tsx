import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'

export default class Background extends Component<any, any> {
  constructor(props: Object) {
    super(props)
    let screenHeight: number = document.documentElement.clientHeight
    let screenWidth: number = window.innerWidth
    let backgroundImage: string = 'url(https://iw233.cn/api.php?sort=pc)'
    if (screenWidth < 768) {
      backgroundImage = 'url(https://iw233.cn/api.php?sort=mp)'
    }
    this.state = {
      background: backgroundImage
    }
  }
  render() {
    return (
      <div 
        className='background' 
        style={{
          backgroundImage: this.state.background
        }}
      >
        <MainArea />
      </div>
    )
  }
}
