import React, { Component } from 'react'
import '../scss/OneButton.scss'

export default class OneButton extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      oneMain: {},
      oneButtonHeight: '',
    }
  }
  render() {
    return (
      <div className='one_button' style={{ marginBottom: this.state.oneButtonHeight }}>
        <span>{this.state.oneMain.hitokoto}</span>
      </div>
    )
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
      oneButtonHeight: oneButtonHeight
    }
  }
}
