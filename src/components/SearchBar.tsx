import React, { Component } from 'react'
import '../scss/SearchBar.scss'
import googleImg from '../img/google.png'
import bingImg from '../img/bing-logo.png'
import baiduImg from '../img/baidu.png'

export default class SearchBar extends Component<any, any> {
  constructor(props: Object) {
    super(props)
    let screenWidth: number = window.innerWidth
    let searchBarWidth: string = ''
    if (screenWidth < 768) {
      searchBarWidth = '324px'
    }
    this.state = {
      searchBarWidth: searchBarWidth,
      moreSearchShow: true,
      searchEngine: 'google',
      searchEngineImg: googleImg,
      keyword: '',
      searchBtnShow: {
        keywordsRight: 'none',
        searchBtn: ''
      }
    }
  }
  render() {
    return (
      <div 
        className='search_bar'
        style={{width: this.state.searchBarWidth}}
      >
        <img alt='' src={this.state.searchEngineImg} onClick={() => this.clickSearchImg(this.state.moreSearchShow)} />
        <input type="text" onKeyUp={this.searchKeyword} />
        <div className="keywords_right" style={{display: this.state.searchBtnShow.keywordsRight}}></div>
        <div className="search_btn" onClick={() => this.toSearch(this.state.searchEngine)} style={{width: this.state.searchBtnShow.searchBtn}}>搜索</div>
      </div>
    )
  }
  clickSearchImg = (moreSearchShow: boolean) => {
    this.props.event(!moreSearchShow)
    this.setState({
      moreSearchShow: !moreSearchShow
    })
  }
  searchKeyword = (e: any) => {
    if(this.state.searchBarWidth === '') {
      if (e.target.value.length > 0) {
        this.setState({
          searchBtnShow: {
            keywordsRight: '',
            searchBtn: '45px'
          }
        })
      } else {
        this.setState({
          searchBtnShow: {
            keywordsRight: 'none',
            searchBtn: ''
          }
        })
      }
    }
    this.setState({
      keyword: e.target.value
    })
    if (e.code === 'Enter') {
      this.toSearch(this.state.searchEngine)
    }
  }
  toSearch = (searchEngine: string) => {
    switch (searchEngine) {
      case 'google':
        return window.open('https://www.google.com/search?q=' + this.state.keyword, '_self')
      case 'bing':
        return window.open('https://cn.bing.com/search?q=' + this.state.keyword, '_self')
      case 'baidu':
        return window.open('https://www.baidu.com/s?wd=' + this.state.keyword, '_self')
      default:
        return null
    }
  }
}
