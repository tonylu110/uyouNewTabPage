import React, { Component } from 'react'
import '../scss/MoreSearch.scss'
import getSearchEngine from '../data/SearchData/SearchImg'
import engine from '../data/SearchData/SearchEngin'

export default class MoreSearch extends Component<any, any> {
  constructor(props: any) {
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
          {
            engine.map((item: any, index: number) => {
              return (
                <div onClick={() => this.clickSearchImg(false, item.name)} style={item.style} key={index}>
                  <img src={getSearchEngine(item.name)} alt='' style={item.img} />
                </div>
              )
            })
          }
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
