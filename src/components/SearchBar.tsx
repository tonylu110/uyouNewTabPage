import React, { Component } from 'react'
import '../scss/SearchBar.scss'
import googleImg from '../img/google.png'
import bingImg from '../img/bing-logo.png'
import baiduImg from '../img/baidu.png'

export default class SearchBar extends Component<any, any> {
  getSearchEngine = (searchEngine: unknown) => {
    if (searchEngine === null) {
      return googleImg
    } else if (searchEngine === 'google') {
      return googleImg
    } else if (searchEngine === 'bing') {
      return bingImg
    } else if (searchEngine === 'baidu') {
      return baiduImg
    }
  }
  constructor(props: Object) {
    super(props)
    let screenWidth: number = window.innerWidth
    let searchBarWidth: string = ''
    let searchEngine: unknown = localStorage.getItem('searchEngine')
    let searchEngineImg: string | undefined = googleImg
    searchEngineImg = this.getSearchEngine(searchEngine)
    if (screenWidth < 768) {
      searchBarWidth = '324px'
    }
    this.state = {
      searchBarWidth: searchBarWidth,
      moreSearchShow: false,
      searchEngine: searchEngine,
      searchEngineImg: searchEngineImg,
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
  static getDerivedStateFromProps(props: any) {
    if (props.moreSearchShow !== null) {
      let searchEngineImg: string = googleImg
      if (props.searchEngine === 'google') {
        searchEngineImg = googleImg
      } else if (props.searchEngine === 'bing') {
        searchEngineImg = bingImg
      } else if (props.searchEngine === 'baidu') {
        searchEngineImg = baiduImg
      }
      return {
        moreSearchShow: props.moreSearchShow,
        searchEngine: props.searchEngine,
        searchEngineImg: searchEngineImg
      };
    }
    return null;
  }
}
