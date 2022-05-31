import React, { Component } from 'react'
import TarRequest from '../../util/TarRequest'
import OneButton from './OneButton'
import OneWindow from './OneWindow'

export default class One extends Component<any, any> {
  state = {
    oneMain: {},
    oneWindowShow: false
  }
  render() {
    return (
      <>
        <OneButton oneMain={this.state.oneMain} event={(e: any) => {
          this.setState({
            oneWindowShow: e
          })
        }} oneWindowShow={this.state.oneWindowShow} />
        <OneWindow oneMain={this.state.oneMain} event={(e: boolean) => {
          this.setState({
            oneWindowShow: e
          })
        }} oneWindowShow={this.state.oneWindowShow} />
        <div
          className='black_back'
          style={ this.state.oneWindowShow ? {
            zIndex: '20',
            backgroundColor: '#00000050'
          } : {}}
          onClick={() => this.clickBlackBack()}
        ></div>
      </>
    )
  }
  clickBlackBack = () => {
    this.setState({
      oneWindowShow: false
    })
  }
  componentDidMount() {
    TarRequest('get', 'https://v1.hitokoto.cn/', null, (res: any) => {
      this.setState({
        oneMain: res
      })
    })
  }
}
