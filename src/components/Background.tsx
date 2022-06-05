import React, { Component } from 'react'
import '../scss/Background.scss'
import MainArea from './MainArea'
import One from './One'
import RightTopButtons from "./buttons/RightTopButtons";
import isHideAll from "../util/isHideAll";
import mobileCheck from "../util/isMobile";
import BottomButtons from "./buttons/BottomButtons";

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
        {this.state.isMobile ?
          <BottomButtons hideAllFn={(e: boolean) => this.getHideAll(e)} /> :
          <RightTopButtons hideAllFn={(e: boolean) => this.getHideAll(e)}/>
        }
      </div>
    )
  }
  getHideAll = (e: boolean) => {
    this.setState({
      hideAll: e
    })
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
