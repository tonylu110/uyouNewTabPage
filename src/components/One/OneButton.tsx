import React, { Component } from 'react'
import '../../scss/One/OneButton.scss'

export default class OneButton extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      oneMain: {},
      oneButtonHeight: '',
      oneWindowShow: false
    }
  }
  render() {
    return (
      <div className='one_button' style={{ marginBottom: this.state.oneButtonHeight }} onClick={() => this.openOneWindow()}>
        <span>{this.state.oneMain.hitokoto}</span>
      </div>
    )
  }
  openOneWindow = () => {
    this.props.event(true)
    this.setState({
      oneWindowShow: true
    })
  }
  static getDerivedStateFromProps(props: any) {
    let screenWidth: number = window.innerWidth
    let oneButtonHeight: string = ''
    if (props.oneMain.hitokoto !== undefined) {
      oneButtonHeight = '20px'
      if (screenWidth < 768) {
        oneButtonHeight = '20vh'
      }
    }
    return {
      oneMain: props.oneMain,
      oneButtonHeight: oneButtonHeight,
      oneWinwodShow: props.oneWindowShow
    }
  }
}
