import React, { Component } from 'react'
import '../scss/OneWindow.scss'
import closeImg from '../img/close.png'

export default class OneWindow extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      oneMain: {},
      oneWindowShow: false
    }
  }
  render() {
    return (
      <div className='one_main' style={{transform: this.state.oneWindowShow ? 'scale(1, 1)' : ''}}>
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
