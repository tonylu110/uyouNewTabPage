import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import RightTopButtons from "./RightTopButtons";
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";

export default class Background extends Component<any, any> {
  private readonly mobileCheck: mobileCheck = new mobileCheck()
  state = {
    isMobile: this.mobileCheck.isMobile(),
    backgroundShow: false,
    background: this.mobileCheck.getBackground().backgroundImage,
    backgroundHeight: this.mobileCheck.getBackground().backgroundHeight,
    hideAll: isHideAll()
  }
  render() {
    return (
      <div
        className='background'
        style={{
          display: this.state.backgroundShow ? '' : 'none',
          backgroundImage: this.state.background,
          height: this.state.backgroundHeight
        }}
      >
        <MainArea hideAll={this.state.hideAll}/>
        {this.state.hideAll ? null : <One/>}
        <RightTopButtons hideAll={(e: boolean) => {
          this.setState({
            hideAll: e
          })
        }}/>
      </div>
    )
  }
  componentDidMount() {
    let img = new Image()
    img.src = this.state.background.slice(4, -1)
    img.onload = () => {
      this.setState({
        backgroundShow: true
      })
    }
  }
}
