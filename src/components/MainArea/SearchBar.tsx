import React, { Component } from 'react'
import '../../scss/MainArea/SearchBar.scss'
import googleImg from '../../img/google.png'
import getSearchEngine from '../../data/SearchData/SearchImg'
import isMobile from "../../util/isMobile";

export default class SearchBar extends Component<any, any> {
  constructor(props: Object) {
    super(props)
    let searchBarWidth: string = ''
    let searchEngine: unknown = localStorage.getItem('searchEngine')
    let searchEngineImg: string | undefined = googleImg
    searchEngineImg = getSearchEngine(searchEngine)
    if (isMobile()) {
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
    if (e.key === 'Enter') {
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
      let searchEngineImg: string | undefined = googleImg
      searchEngineImg = getSearchEngine(props.searchEngine)
      return {
        moreSearchShow: props.moreSearchShow,
        searchEngine: props.searchEngine,
        searchEngineImg: searchEngineImg
      };
    }
    return null;
  }
}
