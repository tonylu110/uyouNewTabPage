import React, { Component } from 'react'
import '../scss/MoreSearch.scss'
import googleImg from '../img/google.png'
import bingImg from '../img/bing-logo.png'
import baiduImg from '../img/baidu.png'

export default class MoreSearch extends Component<any, any> {
  constructor(props: Object) {
    super(props)
    let screenwidth: number = window.screen.width
    let moreSearchWidth: string = ''
    let hideAll: unknown = localStorage.getItem('hideAll')
    let moreSearchTop: string = ''
    if (hideAll === 'true') {
      moreSearchTop = '0px'
    }
    if (screenwidth < 768) {
      moreSearchWidth = '300px'
    }
    this.state = {
      moreSearchWidth: moreSearchWidth,
      moreSearchShow: false,
      imgs: [googleImg, bingImg, baiduImg],
      mOpacity: '0',
      mZIndex: '3',
      moreSearch: '',
      moreSearchTop: moreSearchTop
    }
  }
  render() {
    return (
      <div 
        className={'more_search' + this.state.moreSearch}
        style={{
          opacity: this.state.mOpacity,
          zIndex: this.state.mZIndex,
          maxWidth: this.state.moreSearchWidth,
          marginTop: this.state.moreSearchTop
        }}
      >
        <div className="search_engines">
          <div onClick={() => this.clickSearchImg(false, 'google')}>
            <img src={this.state.imgs[0]} alt='' />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'bing')} style={{ padding: '15px', width: '70px', height: '70px' }}>
            <img src={this.state.imgs[1]} style={{ width: '70px', height: '70px' }} alt="" />
          </div>
          <div onClick={() => this.clickSearchImg(false, 'baidu')} style={{ padding: '20px', height: '60px', width: '60px' }}>
            <img src={this.state.imgs[2]} style={{ width: '60px', height: '60px' }} alt="" />
          </div>
        </div>
      </div>
    )
  }
  clickSearchImg = (moreSearchShow: boolean, searchEngine: string) => {
    this.props.event({
      moreSearchShow: moreSearchShow,
      searchEngine: searchEngine
    })
    localStorage.setItem('searchEngine', searchEngine)
    this.setState({
      mOpacity: '0',
      mZIndex: '3',
      moreSearch: '',
      moreSearchShow: moreSearchShow
    })
  }
  static getDerivedStateFromProps(props: any) {
    if (props.moreSearchShow !== null) {
      var mOpacity
      var mZIndex
      var moreSearch
      if (!props.moreSearchShow) {
        mOpacity = '0'
        mZIndex = '3'
        moreSearch = ''
      } else {
        mOpacity = ''
        mZIndex = ''
        moreSearch = ' more_search_show'
      }
      return {
        mOpacity: mOpacity,
        mZIndex: mZIndex,
        moreSearch: moreSearch
      };
    }
    return null;
  }
}
