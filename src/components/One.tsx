import React, { Component } from 'react'
import TarRequest from '../util/TarRequest'
import OneButton from './OneButton'

export default class One extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      oneMain: {}
    }
  }
  render() {
    return (
      <>
        <OneButton oneMain={this.state.oneMain} />
      </>
    )
  }
  componentDidMount() {
    TarRequest('get', 'https://v1.hitokoto.cn/', null, (res: any) => {
      this.setState({
        oneMain: res
      })
    })
  }
}
