import React, { Component } from 'react'
import '../../scss/One/OneWindow.scss'
import oneWindowStyle from "../../data/OneData/oneWindowOpenData";
import closeImg from '../../img/close.png'

export default class OneWindow extends Component<any, any> {
  state = {
    oneMain: {
      id: undefined,
      hitokoto: undefined,
      from: undefined
    },
    oneWindowShow: false
  }
  render() {
    return (
      <div className='one_main' style={oneWindowStyle(this.state.oneWindowShow)}>
        <div className='close_button' onClick={() => this.closeWindow()}>
          <img src={closeImg} alt="" />
        </div>
        <div className='one_main_info'>
          <span className='one_num'>#{this.state.oneMain.id}</span>
          <span className='one_text'>{this.state.oneMain.hitokoto}</span>
          <span className='one_from'>———{this.state.oneMain.from}</span>
        </div>
      </div>
    )
  }
  closeWindow = () => {
    this.props.event(false)
    this.setState({
      oneWindowShow: false
    })
  }
  static getDerivedStateFromProps(props: any) {
    return {
      oneMain: props.oneMain,
      oneWindowShow: props.oneWindowShow
    }
  }
}