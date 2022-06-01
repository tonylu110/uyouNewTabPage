import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import RightTopButtons from "./RightTopButtons";
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";

export default class Background extends Component<any, any> {
  state = {
    isMobile: new mobileCheck().isMobile(),
    backgroundShow: false,
    background: new mobileCheck().getBackground().backgroundImage,
    backgroundHeight: new mobileCheck().getBackground().backgroundHeight,
    hideAll: isHideAll()
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
        <MainArea hideAll={this.state.hideAll} />
        {this.state.hideAll ? null : <One />}
        <RightTopButtons hideAll={(e: boolean) => {
          this.setState({
            hideAll: e
          })
        }} />
      </div>
    )
  }
}
