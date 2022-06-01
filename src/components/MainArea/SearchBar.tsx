import React, { Component } from 'react'
import '../../scss/MainArea/SearchBar.scss'
import getSearchEngineImg from '../../data/SearchData/SearchImg'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";

export default class SearchBar extends Component<any, any> {
  state = {
    searchBarWidth: new mobileCheck().getSearchWidth(),
    moreSearchShow: false,
    searchEngine: getSearchEngine(),
    searchEngineImg: getSearchEngineImg(getSearchEngine()),
    keyword: '',
    searchBtnShow: {
      keywordsRight: 'none',
      searchBtn: ''
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
  toSearch = (searchEngine: string | unknown) => {
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
      return {
        moreSearchShow: props.moreSearchShow,
        searchEngine: props.searchEngine,
        searchEngineImg: getSearchEngineImg(props.searchEngine)
      };
    }
    return null;
  }
}
