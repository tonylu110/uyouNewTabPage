import React, { Component } from 'react'
import '../../scss/One/OneButton.scss'
import oneButtonStyle from "../../data/OneData/oneButtonData";

export default class OneButton extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      oneMain: {},
      oneButtonShow: false,
      oneWindowShow: false
    }
  }
  render() {
    return (
      <div
        className='one_button'
        style={oneButtonStyle(this.state.oneButtonShow)}
        onClick={() => this.openOneWindow()}
      >
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
    let oneButtonShow: boolean = false
    if (props.oneMain.hitokoto !== undefined) {
      oneButtonShow = true
      if (screenWidth < 768) {
        oneButtonShow = true
      }
    }
    return {
      oneMain: props.oneMain,
      oneButtonShow: oneButtonShow,
      oneWindowShow: props.oneWindowShow
    }
  }
}
